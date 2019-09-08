$(function(){

    $(":button[value=Add]").on("click",function(){
        
        newsValue=$(":text").first().val();
        newsType=$(":radio:checked").val();


        $("table:last").append("<tr class='"+newsType+"'><td>"+newsValue+"</td><td><a href='#'>Delete</a></td></tr>");

    });//add

    
    //delete
    $("table").on("click","a",function(){
        $(this).parent().parent().remove();
        // $("table:last ").remove();
    });

    $(":text:last").on("keyup",function(){

        searchValue=$(this).val();
        console.log(searchValue);
        $("table:last td:even").each(function(index,elm){
            //elm   -> td , HTML Elm.
            if($(elm).text().indexOf(searchValue)==-1)
            {
                $(elm).parent().hide();
            }
            else
            {
                $(elm).parent().show();

            }
            

        });//loop

    });



});//load