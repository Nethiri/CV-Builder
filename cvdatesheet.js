class DatenSammlung {
    constructor() {
        this.name = "";
        this.tele = "";
        this.email = "";
        this.adress1 = "";  //ort / plz
        this.adress2 = "";  //strert
        this.experience = "";
        this.refrences = "";
        this.profession = "";
        this.profile = "";
        this.carrer = [{
            "time": "",
            "type": "",
            "location": "",
            "description": ""
        }];   // beruflicher wertegang - [] erzeugt. leeres array
        this.academic = [{
            "time": "",
            "description" : ""
        }]; // academischer wertegang
        this.skills = ""; 
    }
    
}