// Simple HTML include system
class HTMLIncluder {
  static async loadComponent(src) {
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to load ${src}: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error(`Error loading component ${src}:`, error);
      return `<!-- Error loading ${src} -->`;
    }
  }

  static async includeHTML() {
    const includeElements = document.querySelectorAll('[data-include]');
    
    for (const element of includeElements) {
      const src = element.getAttribute('data-include');
      if (src) {
        const content = await this.loadComponent(src);
        element.innerHTML = content;
        element.removeAttribute('data-include');
      }
    }
  }
}

// Auto-include when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  HTMLIncluder.includeHTML();
}); 