fetch('https://localhost:7035/Home/OrdersPendingDeliverys')
  .then(response => response.json())
  .then(OrdersPendingDelivery => {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    
    OrdersPendingDelivery.forEach(item => {
      const fechaPedido = new Date(item.FechaPedido);
      const fechaEntrega = new Date(item.FechaEntrega);
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.Nombre}</td>
        <td>${item.PoblacionEntrega}</td>
        <td>${item.ProvinciaEntrega}</td>
        <td>${item.Pedido}</td>
        <td>${fechaPedido.toLocaleDateString()}</td>
        <td>${fechaEntrega.toLocaleDateString()}</td>
        <td>${item.DiasRetraso}</td>
      `;
      tbody.appendChild(row);
      
      const celdas = row.getElementsByTagName('td');
      const ultimaCelda = celdas[celdas.length - 1];
      const penultimaCelda = celdas[celdas.length - 2];
      const antepenultimaCelda = celdas[celdas.length - 3];
      ultimaCelda.style.textAlign = 'center';
      penultimaCelda.style.textAlign = 'center';
      antepenultimaCelda.style.textAlign = 'center';
    });
  })
  .catch(error => console.error(error));