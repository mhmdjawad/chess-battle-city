class SYS{

    static getLocationOfTutorials(){
        return "Assets/Tutorials/";
    }
    static getListOfTutorials(){
        return [
            "EP00-Introduction.html",
            "EP01-SetUpAndTimer.html",
            "EP02-EventManager.html"
        ];
    }
    static initializeSelectorWithTutorials(selector){
        SYS.selector = selector;
        SYS.target = $(selector).attr("to");
        $(selector).empty();
        console.log(SYS.getListOfTutorials());
        [...SYS.getListOfTutorials()].forEach(htmlFileName=>{
            let parsedname = htmlFileName;
            parsedname = parsedname.replace(".html","");
            $(selector).append(`
                <option value="${htmlFileName}" > ${parsedname} </option>
            `);
        });
        $(selector).parent().parent().find(".btn").on('click',SYS.loadTutorial);
    }

    static async loadTutorial(){
        let url = SYS.getLocationOfTutorials() + $(SYS.selector).val();
        const r = await fetch(url);
        const d = await r.text();
        $(SYS.target).html(d);
    }

    static ToggleSeePart(that){
        let currentlyView = $(that).attr("view");
        if(currentlyView === "y"){
            $(that).html('<i class="fa fa-arrow-down"></i>');
            $(that).parents(".part_container").find(".part_body").hide();
        }
        else{
            $(that).html('<i class="fa fa-arrow-right"></i>');
            $(that).parents(".part_container").find(".part_body").show();
        }
        $(that).attr("view",currentlyView === "y" ? "n" : "y");


    }
}