
         var temperature=document.getElementById("temp") // Donne un ID pour pouvoir l'utiliser dans le code html
         var temp=5.0;
         var tempnum;

         if (temp > 28) {
         document.getElementById("monbouton1").disabled; 
         }

         //function btngrise(element)
         //{
             //var grise=document.getElementById(monbouton1);

         //}
         
         function affichageplus() 
         {
         temp += 0.5;
         temperature.innerHTML = temp;
         
         }

         function affichagemoins()
         {
        temp -= 0.5;
        temperature.innerHTML = temp; // Permet de afficher la valeur dans la page HTML
        
         }
        //temperature.innerHTML = "10";