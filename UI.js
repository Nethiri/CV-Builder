class CVEditor {
    constructor(datenSammlung, field) {
        this.datenSammlung = datenSammlung;
        this.field = field;
    }        //field = html data field / data element;; datenSammlung = an object of type DatenSammlung

    buildEditor() {
        let current = this;
        this.field.innerHTML = "" //lösche alles was im field ist (aus dem HTML element)

        //let inputname = document.createElement("input"); //erstellen ein input tag --> mit eigenschaften
        //inputname.type = "text";
        //inputname.placeholder = "fist-/surname";
        //inputname.value = this.datenSammlung.name;
        //inputname.onchange = function () {
        //    current.datenSammlung.name = inputname.value;
        //};
        //this.field.appendChild(inputname); 

        this.field.appendChild(createinputtextfield("fist -/surname", this.datenSammlung.name, (v)=>current.datenSammlung.name = v));
        this.field.appendChild(createinputtextfield("phone number", this.datenSammlung.tele, (v)=>current.datenSammlung.tele = v));
        this.field.appendChild(createinputtextfield("email", this.datenSammlung.email, (v)=>current.datenSammlung.email = v));
        this.field.appendChild(createinputtextfield("adress1", this.datenSammlung.adress1, (v)=>current.datenSammlung.adress1 = v));
        this.field.appendChild(createinputtextfield("adress2", this.datenSammlung.adress2, (v)=>current.datenSammlung.adress2 = v));
        this.field.appendChild(createinputtextareafield("experiences", this.datenSammlung.experience, (v)=>current.datenSammlung.experience = v));
        this.field.appendChild(createinputtextareafield("refrences", this.datenSammlung.refrences, (v)=>current.datenSammlung.refrences = v));
        this.field.appendChild(createinputtextfield("profession", this.datenSammlung.profession, (v)=>current.datenSammlung.profession = v));
        this.field.appendChild(createinputtextareafield("profile", this.datenSammlung.profile, (v)=>current.datenSammlung.profile = v));
        
        //carrer
        for (let i = 0; i < this.datenSammlung.carrer.length; i++) {
            this.field.appendChild(document.createElement("br"));

            let plusbutton = createbutton("+",function () {
                //was macht der button
                current.datenSammlung.carrer.splice(i + 1, 0, {"time": "", "type": "", "location": "", "description": ""})
                current.buildEditor();
            });
            this.field.appendChild(plusbutton);

            let minusbutton = createbutton("-",function () {
                //was macht der button
                current.datenSammlung.carrer.splice(i, 1)
                current.buildEditor();
            });
            if (this.datenSammlung.carrer.length == 1) {
                minusbutton.disabled = true;
            }
            this.field.appendChild(minusbutton);

            
            this.field.appendChild(createinputtextfield("time", current.datenSammlung.carrer[i].time, (v)=>current.datenSammlung.carrer[i].time = v));
            this.field.appendChild(createinputtextfield("type", current.datenSammlung.carrer[i].type, (v)=>current.datenSammlung.carrer[i].type = v));
            this.field.appendChild(createinputtextfield("location", current.datenSammlung.carrer[i].location, (v)=>current.datenSammlung.carrer[i].location = v));
            this.field.appendChild(createinputtextareafield("location", current.datenSammlung.carrer[i].description, (v)=>current.datenSammlung.carrer[i].description = v));

            let upbutton = createbutton("\u25B2",function () {
                //was macht der button
                let buff = current.datenSammlung.carrer[i];
                current.datenSammlung.carrer[i] = current.datenSammlung.carrer[i - 1];
                current.datenSammlung.carrer[i - 1] = buff;
                current.buildEditor();
            });
            if (i == 0) {
                upbutton.disabled = true;
            }
            this.field.appendChild(upbutton);

            let downbutton = createbutton("\u25BC",function () {
                //was macht der button
                let buff = current.datenSammlung.carrer[i];
                current.datenSammlung.carrer[i] = current.datenSammlung.carrer[i + 1];
                current.datenSammlung.carrer[i + 1] = buff;
                current.buildEditor();
            });
            if (i == current.datenSammlung.carrer.length - 1) {
                downbutton.disabled = true;
            }
            this.field.appendChild(downbutton);

        }
        this.field.appendChild(document.createElement("br"));

        

    } // function to build
}

function createinputtextfield(placeholder, value, setcallback) {
    let functionimput = document.createElement("input"); //erstellen ein input tag --> mit eigenschaften
    functionimput.type = "text";
    functionimput.placeholder = placeholder;
    functionimput.value = value;
    functionimput.onchange = function () {
        setcallback(functionimput.value);
    };
    return functionimput;
}

function createinputtextareafield(placeholder, value, setcallback) {
    let functionimput = document.createElement("textarea"); //erstellen ein input tag --> mit eigenschaften
    functionimput.rows = 6;
    functionimput.cols = 64;
    functionimput.placeholder = placeholder;
    functionimput.value = value;
    functionimput.onchange = function () {
        setcallback(functionimput.value);
    };
    return functionimput;
}

function createbutton(value,onclick) {
    let ret = document.createElement("input");
    ret.type = "button";
    ret.value = value;
    ret.onclick = onclick;
    return ret;
    
}
