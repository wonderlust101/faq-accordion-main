let accordion = document.getElementsByClassName('accordion__question');

for (let i = 0; i < accordion.length; i++) {
    let panel = accordion[i].parentElement.nextElementSibling;

    // Opens the first question by default
    if (panel.getAttribute('aria-hidden') === 'false') {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginTop = '1rem';
        accordion[i].setAttribute('aria-expanded', 'true');
    }

    accordion[i].onclick = function () {
        closeAllAccordions(this);
        toggleAccordion(this);
    }
}

/**
 * Purpose: Closes all accordion panels except the one that was clicked.
 * Parameters: activePanel (Element): The accordion element that should remain open.
 * Return: None
 */
function closeAllAccordions(activePanel) {
    for (let i = 0; i < accordion.length; i++) {
        if (accordion[i] !== activePanel) {
            let panel = accordion[i].parentElement.nextElementSibling;
            let icon = accordion[i].querySelector('img');

            accordion[i].setAttribute('aria-expanded', 'false');
            panel.style.maxHeight = null;
            panel.style.marginTop = '0';
            icon.src = "assets/images/icon-plus.svg";
        }
    }
}

/**
 * Purpose: Toggles the expansion and collapse of a specific accordion panel.
 * Parameters: activePanel (Element): The accordion element that was clicked.
 * Return: None
 */
function toggleAccordion(activePanel) {
    let panel = activePanel.parentElement.nextElementSibling;
    let icon = activePanel.querySelector('img');
    let isExpanded = activePanel.getAttribute('aria-expanded') === 'true';

    activePanel.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) { // Closes Panel
        panel.style.maxHeight = null;
        panel.style.marginTop = '0';
        icon.src = "assets/images/icon-plus.svg";
    } else { // Open Panel
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginTop = '1rem';
        icon.src = "assets/images/icon-minus.svg";
    }
}
