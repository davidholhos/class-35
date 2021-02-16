class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Welcome to the race");
        title.position(130,0);

        var input = createInput("name");
        var button = createButton("Log In");
        var greeting = createElement("h3");
        input.position(130,160);
        button.position(200,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updatecount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(130,160);
        })

    }

}