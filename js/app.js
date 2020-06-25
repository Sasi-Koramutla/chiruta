$(()=>{
    $("#login").on("click",()=>{
        event.preventDefault();
        console.log("inside on click");
        console.log($("#inputEmail").val());
        console.log($("#inputPassword").val());
        if(($("#inputEmail").val()=="gitelson@gmail.com") && ($("#inputPassword").val()=="1234")){
            window.location.href = "inside.html"
        }
    });

});