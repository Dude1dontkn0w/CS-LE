var orderlist = []
            const cust_order = [
                {prod_name :'25k Elixir',prod_price:10}, 
                {prod_name :'2 million elixir',prod_price:500}, 
                {prod_name :'5 million elixir',prod_price:1050}, 
                {prod_name :'25k Dark Elixir',prod_price:30}, 
                {prod_name :'300k Dark elixir',prod_price:300}, 
                {prod_name :'1 million dark elixir',prod_price:800}, 
                {prod_name :'Monolith',prod_price:145}, 
                {prod_name :'Cannon',prod_price:50}, 
                {prod_name :'X-bow',prod_price:960}, 
                {prod_name :'Air Defense',prod_price:400}, 
                {prod_name :'WizardTower',prod_price:425},
                {prod_name :'Inferno Tower',prod_price:769},
                {prod_name :'Spring Trap',prod_price:225}, 
                {prod_name :'Tornado Trap',prod_price:200}, 
                {prod_name :'Hidden Tesla',prod_price:175}, 
                {prod_name :'Seeking Air Mine',prod_price:275}, 
                {prod_name :'Skeleton Trap',prod_price:199},
                {prod_name :'Bomb',prod_price:80},
                {prod_name :'Golem',prod_price:100}, 
                {prod_name :'Balloon',prod_price:110},
                {prod_name :'Ice Golem',prod_price:130},
                {prod_name :'Bowler',prod_price:125}, 
                {prod_name :'Dragon',prod_price:1250}, 
                {prod_name :'HOG_RIDEEER',prod_price:300} 
              
            ]

            function showCart() {
                if (orderlist.length == 0) {
                    document.getElementById("yourcart").innerHTML = '<li class="list-group-item d-flex justify-content-center"><em>No items in the cart.</em></li>';
                }    
                else {
                    var total = 0;
                    document.getElementById("yourcart").innerHTML = '';
                    for(var i=0; i<orderlist.length; i++) {
                        total += orderlist[i].prod_price;
                         document.getElementById("yourcart").innerHTML += '<li class="list-group-item d-flex justify-content-between" id="yourcartlist">' + orderlist[i].prod_name  + '<span class="d-inline-block">' + orderlist[i].prod_price + '&nbsp; <button class="btn btn-sm btn-outline-danger" onclick="removeFriend(' + i + ')" >X</button></li>';
                    }
                } 
                document.getElementById("amttotal").innerHTML = total;
                document.getElementById("cust_order").value = JSON.stringify(orderlist);
            }

            function addtoCart(event) {
                var cust_orderItem = Number(event.target.id.slice(3,8)) -1;
                orderlist.push(cust_order[cust_orderItem]);
                showCart();
            }

            function removeFriend(i) {
                orderlist.splice(i, 1);
                showCart();
                if (orderlist.length == 0) {
                    document.getElementById("yourcart").innerHTML = '<li class="list-group-item d-flex justify-content-center"><em>No items in the cart.</em></li>';
                    total == 0
                }
            }