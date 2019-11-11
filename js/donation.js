$(document).ready(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html")

    $(function () {
        $.ajax({
            type: "get",
            dataType: "json",
            url: "../json/donation.json",
            success: function (result) {
                var str = "";
                $.each(result.donation,function(index,obj){
                    if(index%2==1){
                        str += "<tr class='table_item_style1'><td>"+obj.user+"</td>"+
                            "<td>"+obj.project+"</td>"+
                            "<td>"+obj.number+"</td>"+
                            "<td>"+obj.time+"</td>"+
                            "<td>"+obj.pay+"</td></tr>";
                    }else{
                        str += "<tr class='table_item_style2'><td>"+obj.user+"</td>"+
                            "<td>"+obj.project+"</td>"+
                            "<td>"+obj.number+"</td>"+
                            "<td>"+obj.time+"</td>"+
                            "<td>"+obj.pay+"</td></tr>";
                    }


                });
                $("#donation_list").append(str);
            }
        });
    });
})

