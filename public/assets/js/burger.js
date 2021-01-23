$(function() {
    $(".change-devoured").on('click', function(event){
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured")

        console.log('This is the ID: ', id)

        let newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: 'PUT',
            data: newDevouredState
        }).then(
            function() {
                console.log('Changed Devour State to: ', newDevoured)
                location.reload();
            }
        )
    })

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log('Created new burger')
                location.reload();
            }
        )
    })
})