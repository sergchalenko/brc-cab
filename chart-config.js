var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру'],
        datasets: [{
            label: 'Кількість годин по договору',
            data: [12, 19, 3, 5, 2, 3, 8],
            backgroundColor: [
                'rgba(20, 118, 242, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderRadius: Number.MAX_VALUE
        },
        {
            label: 'Використано годин',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderRadius: Number.MAX_VALUE
        }]
    },
    
    options: {
        
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Montserrat'
                    }
                }
            }
        },
        scales: {
            
            y: {
                beginAtZero: true
            }
            
        },

        layout: {
            padding: 30
        }
        
    }

});
