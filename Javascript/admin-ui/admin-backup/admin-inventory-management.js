function initAdminInventoryManagement() {
    console.log('My Account page initialized ✅');

    //=====================Open modal Full Iventory====================//
    document.querySelectorAll('#admin-inventory-body tr').forEach(section => {
        section.addEventListener('click', () => {
            document.getElementById('admin-inventory-detail').classList.add('active');
        });
    });
    document.querySelectorAll('.close-modal-detail').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('admin-inventory-detail').classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', initAdminInventoryManagement);
