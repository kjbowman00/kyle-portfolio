
// Do stuff here after loading


// Load relevant elements
const closeNavigationButton = document.getElementById('close-navigation-button')!;
const openNavigationButton = document.getElementById('open-navigation-button')!;
const navigationDropdown = document.getElementById('navigation-dropdown')!;
const navigationDropdownMask = document.getElementById('navigation-dropdown-mask');


{ // Navigation Dropdown Handler

    let enabled = false;
    function toggle() {
        enabled = !enabled;
        openNavigationButton.classList.toggle("hidden");
        closeNavigationButton.classList.toggle("hidden");
        navigationDropdown.classList.toggle("hidden");
    }

    openNavigationButton.onclick = toggle;
    closeNavigationButton.onclick = toggle;

    // Click outside of handler
    document.addEventListener('click', (event) => {
        let isOutsideClick = false;
        if (event.target instanceof HTMLElement) {
            if (!navigationDropdown.contains(event.target) ||
                navigationDropdownMask?.contains(event.target)) {
                    isOutsideClick = true;
            }
        }
        if (enabled && isOutsideClick) {
            toggle();
        }
    });

    // Handle turning off if scrolling
    window.addEventListener('scroll', () => {
        if (enabled) {
            toggle();
        }
    });
}