import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

// Registrar todos los componentes de Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './charts.html',
  styleUrl: './charts.css'
})
export class ChartsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lineChart') lineChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChart') pieChartRef!: ElementRef<HTMLCanvasElement>;

  private lineChart?: Chart;
  private barChart?: Chart;
  private pieChart?: Chart;

  ngAfterViewInit(): void {
    this.createLineChart();
    this.createBarChart();
    this.createPieChart();
  }

  private createLineChart(): void {
    const ctx = this.lineChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Ventas 2024',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4
          },
          {
            label: 'Ventas 2023',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gráfico de Líneas - Ventas Mensuales'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    this.lineChart = new Chart(ctx, config);
  }

  private createBarChart(): void {
    const ctx = this.barChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E', 'Producto F'],
        datasets: [
          {
            label: 'Unidades Vendidas',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gráfico de Barras - Productos Más Vendidos'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    this.barChart = new Chart(ctx, config);
  }

  private createPieChart(): void {
    const ctx = this.pieChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: ['Marketing', 'Desarrollo', 'Ventas', 'Soporte', 'Administración'],
        datasets: [
          {
            label: 'Presupuesto',
            data: [300, 500, 200, 150, 100],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Gráfico Circular - Distribución de Presupuesto'
          }
        }
      }
    };

    this.pieChart = new Chart(ctx, config);
  }

  ngOnDestroy(): void {
    // Limpiar los gráficos al destruir el componente
    this.lineChart?.destroy();
    this.barChart?.destroy();
    this.pieChart?.destroy();
  }
}
