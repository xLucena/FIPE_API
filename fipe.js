  $(document).ready(function() {

    $('#veiculo').change(function(urlBase){
      var selecionaVeiculo = $('#veiculo option:selected');
      console.log(selecionaVeiculo.val());
      var urlBase = `https://parallelum.com.br/fipe/api/v1/${selecionaVeiculo.val()}/marcas`;
      
      
      /** Marcas**/

      $.getJSON(urlBase, function(data) {
        var items = ["<option  value=\"\" >ESCOLHA UMA MARCA</option>"];
        $.each(data, function(key, val) {
          items += ("<option value='" + val.codigo + "'>" + val.nome + "</option>");
        });
        $("#marcas").html(items);
        console.log("A: ",urlBase);
      });

      /** Veiculo**/

      $("#marcas").change(function() {
        $.getJSON(urlBase + "/" + jQuery("#marcas").val() + "/" + "modelos", function(data) {
          var items = ["<option value=\"\">ESCOLHA UM VEICULO</option>"];
          $.each(data.modelos, function(key, val) {
            items += ("<option value='" + val.codigo + "'>" + val.nome + "</option>");
          });
          $("#modelos").html(items);
          console.log("B: ",urlBase);
        });
      });

      /** Ano**/

      $("#modelos").change(function() {
        $.getJSON(urlBase + "/" + jQuery("#marcas").val() + "/" + "modelos" + "/" + jQuery("#modelos").val() + "/" + "anos", function(data) {
          var items = ["<option value=\"\">ESCOLHA O ANO</option>"];
          $.each(data, function(key, val) {
            console.log(data)
            items += ("<option value='" + val.codigo + "'>" + val.nome + "</option>");
          });
          $("#ano").html(items);
          console.log("C: ",urlBase);
        });
      });
    });
  });