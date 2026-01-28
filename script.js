function initTabs(root) {
    const tabs = root.querySelectorAll('.tab');
    const contents = root.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            const targetTab = e.target;
            const tabId = targetTab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            const targetContent = root.querySelector(
                `.content[data-content="${tabId}"]`
            );
            targetTab.classList.add('active');
            targetContent.classList.add('active');
        });
    });
}
function initAccordion(root) {
    const accBtn = root.querySelectorAll('.acc-btn');
    const accContent = root.querySelectorAll('.acc-content');

    accBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            const targetBtn = e.target;
            const btnId = targetBtn.dataset.acc;
            
            const targetContent = root.querySelector(
                `.acc-content[data-content="${btnId}"]`
            );
            targetBtn.classList.toggle('open');
            targetContent.classList.toggle('open');
        });
    });
}
document.querySelectorAll('.section').forEach(section => {
    initTabs(section);
    initAccordion(section);
})