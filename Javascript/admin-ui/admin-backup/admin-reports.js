function initAdminReports(){
    // Appointment Report Circle Chart
    var ctx1 = document.getElementById('appointment-chart').getContext('2d');
    var appointmentChart = new Chart(ctx1, {
        type: 'doughnut', // 'doughnut' creates a circle chart
        data: {
            labels: ['Completed', 'Pending'], // Categories for the chart
            datasets: [{
                label: 'Appointment Report',
                data: [75, 25], // Example data: 75% completed, 25% pending
                backgroundColor: ['#28a745', '#dc3545'], // Green for completed, Red for pending
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 80, // Make it a donut chart (circle with hole)
            plugins: {
                legend: {
                    display: false, // Hides the legend
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + '%'; // Format tooltip to show percentage
                        }
                    }
                }
            }
        }
    });

    // Inventory Report Circle Chart
    var ctx2 = document.getElementById('inventory-chart').getContext('2d');
    var inventoryChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['In Stock', 'Out of Stock'],
            datasets: [{
                label: 'Inventory Report',
                data: [40, 60], // Example data: 40% in stock, 60% out of stock
                backgroundColor: ['#007bff', '#ffc107'], // Blue for in stock, Yellow for out of stock
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 80,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

        var ctx3 = document.getElementById('revenue-chart').getContext('2d');
    var revenueChart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['In Stock', 'Out of Stock'],
            datasets: [{
                label: 'Revenue Report',
                data: [40, 60], // Example data: 40% in stock, 60% out of stock
                backgroundColor: ['#007bff', '#ffc107'], // Blue for in stock, Yellow for out of stock
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            cutoutPercentage: 80,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

}
document.addEventListener('DOMContentLoaded', initAdminReports);