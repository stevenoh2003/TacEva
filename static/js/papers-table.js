(function(){
	var state = {
		data: [],
		filtered: [],
		sortKey: null,
		sortDir: 'asc',
		page: 1,
		pageSize: 10
	};

	function renderDescriptionCell(text){
		const container = document.createElement('div');
		container.className = 'description-container';
		const p = document.createElement('div');
		p.className = 'description-text';
		p.textContent = text || '';
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'button is-text is-small description-toggle';
		btn.textContent = 'Show more';
		btn.addEventListener('click', function(){
			const isExpanded = p.classList.toggle('expanded');
			btn.textContent = isExpanded ? 'Show less' : 'Show more';
		});
		container.appendChild(p);
		container.appendChild(btn);
		return container;
	}

	function paginate(rows){
		const start = (state.page - 1) * state.pageSize;
		return rows.slice(start, start + state.pageSize);
	}

	function renderPagination(){
		const total = state.filtered.length;
		const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
		if(state.page > totalPages) state.page = totalPages;
		const pagesUl = document.getElementById('papers-pages');
		const prev = document.getElementById('papers-prev');
		const next = document.getElementById('papers-next');
		if(!pagesUl || !prev || !next) return;
		pagesUl.innerHTML = '';
		prev.classList.toggle('is-disabled', state.page <= 1);
		next.classList.toggle('is-disabled', state.page >= totalPages);
		prev.onclick = function(){ if(state.page > 1){ state.page--; draw(); } };
		next.onclick = function(){ if(state.page < totalPages){ state.page++; draw(); } };
		function pageLink(n){
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.className = 'pagination-link' + (n===state.page ? ' is-current' : '');
			a.textContent = String(n);
			a.addEventListener('click', function(){ state.page = n; draw(); });
			li.appendChild(a);
			return li;
		}
		const maxButtons = 5;
		let start = Math.max(1, state.page - Math.floor(maxButtons/2));
		let end = Math.min(totalPages, start + maxButtons - 1);
		start = Math.max(1, Math.min(start, end - maxButtons + 1));
		for(let n = start; n <= end; n++) pagesUl.appendChild(pageLink(n));
	}

	function renderTable(rows){
		const tbody = document.getElementById('papers-tbody');
		if(!tbody) return;
		tbody.innerHTML = '';
		paginate(rows).forEach(p => {
			const tr = document.createElement('tr');
			const tdCat = document.createElement('td');
			tdCat.textContent = p.category || '';
			tr.appendChild(tdCat);
			const tdTitle = document.createElement('td');
			tdTitle.textContent = p.title || '';
			tr.appendChild(tdTitle);
			const tdConf = document.createElement('td');
			tdConf.textContent = p.conference || '';
			tr.appendChild(tdConf);
			const tdPaper = document.createElement('td');
			if(p.paperUrl){
				const aPaper = document.createElement('a');
				aPaper.href = p.paperUrl;
				aPaper.target = '_blank';
				aPaper.textContent = 'Paper';
				aPaper.className = 'has-text-link';
				tdPaper.appendChild(aPaper);
			} else { tdPaper.textContent = '—'; }
			tr.appendChild(tdPaper);
			const tdWeb = document.createElement('td');
			if(p.websiteUrl){
				const aWeb = document.createElement('a');
				aWeb.href = p.websiteUrl;
				aWeb.target = '_blank';
				aWeb.textContent = 'Website';
				aWeb.className = 'has-text-link';
				tdWeb.appendChild(aWeb);
			} else { tdWeb.textContent = '—'; }
			tr.appendChild(tdWeb);
			const tdDesc = document.createElement('td');
			tdDesc.appendChild(renderDescriptionCell(p.description || ''));
			tr.appendChild(tdDesc);
			tbody.appendChild(tr);
		});
	}

	function normalize(text){ return (text || '').toString().toLowerCase(); }

	function applyFilters(){
		const search = document.getElementById('papers-search');
		const cat = document.getElementById('papers-filter-category');
		const conf = document.getElementById('papers-filter-conference');
		let data = state.data.slice();
		const q = normalize(search && search.value);
		const c = normalize(cat && cat.value);
		const cf = normalize(conf && conf.value);
		if(q){
			data = data.filter(p => (
				normalize(p.title).includes(q) ||
				normalize(p.conference).includes(q) ||
				normalize(p.category).includes(q) ||
				normalize(p.description).includes(q)
			));
		}
		if(c){ data = data.filter(p => normalize(p.category) === c); }
		if(cf){ data = data.filter(p => normalize(p.conference) === cf); }
		state.filtered = data;
	}

	function applySort(){
		if(!state.sortKey) return;
		const mul = state.sortDir === 'asc' ? 1 : -1;
		state.filtered.sort((a,b)=>{
			const va = normalize(a[state.sortKey]);
			const vb = normalize(b[state.sortKey]);
			if(va < vb) return -1*mul;
			if(va > vb) return 1*mul;
			return 0;
		});
	}

	function draw(){
		renderTable(state.filtered);
		renderPagination();
	}

	function setupControls(){
		state.data = (window.tacEvalPapers || []).slice();
		state.filtered = state.data.slice();
		const search = document.getElementById('papers-search');
		const cat = document.getElementById('papers-filter-category');
		const conf = document.getElementById('papers-filter-conference');
		const clearBtn = document.getElementById('papers-clear');
		const thSorts = document.querySelectorAll('#papers-table thead th[data-sort]');
		const pageSizeSel = document.getElementById('papers-page-size');

		function reapply(){
			applyFilters();
			applySort();
			state.page = 1; // reset page on changes
			draw();
		}

		[search, cat, conf].forEach(el => el && el.addEventListener('input', reapply));
		clearBtn && clearBtn.addEventListener('click', function(){
			[search, cat, conf].forEach(el => { if(el) el.value = ''; });
			reapply();
		});

		// Sorting
		thSorts.forEach(th => {
			th.addEventListener('click', function(){
				const key = th.getAttribute('data-sort');
				if(state.sortKey === key){ state.sortDir = (state.sortDir === 'asc' ? 'desc' : 'asc'); }
				else { state.sortKey = key; state.sortDir = 'asc'; }
				applySort();
				state.page = 1;
				draw();
			});
		});

		// Populate filter dropdowns from data
		function populate(id, values){
			const sel = document.getElementById(id);
			if(!sel) return;
			const unique = Array.from(new Set(values.filter(Boolean)));
			unique.sort();
			unique.forEach(v => {
				const opt = document.createElement('option');
				opt.value = v; opt.textContent = v; sel.appendChild(opt);
			});
		}
		populate('papers-filter-category', state.data.map(p=>p.category));
		populate('papers-filter-conference', state.data.map(p=>p.conference));

		// page size
		if(pageSizeSel){
			state.pageSize = parseInt(pageSizeSel.value, 10) || 10;
			pageSizeSel.addEventListener('change', function(){
				state.pageSize = parseInt(pageSizeSel.value, 10) || 10;
				state.page = 1;
				draw();
			});
		}

		reapply();
	}

	document.addEventListener('DOMContentLoaded', setupControls);
})(); 