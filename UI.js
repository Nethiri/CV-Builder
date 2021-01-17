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

        this.field.appendChild(createinputtextfield("fist -/surname", this.datenSammlung.name, (v)=>current.datenSammlung.name = v))






        let inputtele = document.createElement("input"); 
        inputtele.type = "text";
        inputtele.placeholder = "phone number";
        inputtele.value = this.datenSammlung.tele;
        inputtele.onchange = function () {
            current.datenSammlung.tele = inputtele.value;
        };
        this.field.appendChild(inputtele);

        let inputemails = document.createElement("input");
        inputemails.type = "text";
        inputemails.placeholder = "email";
        inputemails.value = this.datenSammlung.email;
        inputemails.onchange = function () {
            current.datenSammlung.email = inputemails.value;
        };
        this.field.appendChild(inputemails);

        let inputadr1 = document.createElement("input");
        inputadr1.type = "text";
        inputadr1.placeholder = "adress1";
        inputadr1.value = this.datenSammlung.adress1;
        inputadr1.onchange = function () {
            current.datenSammlung.adress1 = inputadr1.value;
        };
        this.field.appendChild(inputadr1);

        let inputadr2 = document.createElement("input");
        inputadr2.type = "text";
        inputadr2.placeholder = "adress2";
        inputadr2.value = this.datenSammlung.adress2;
        inputadr2.onchange = function () {
            current.datenSammlung.adress2 = inputadr2.value;
        };
        this.field.appendChild(inputadr2);

        let inputexp = document.createElement("textarea");
        inputexp.rows = "4";
        inputexp.cols = "64";
        inputexp.placeholder = "experiences";
        inputexp.value = this.datenSammlung.experience;
        inputexp.onchange = function () {
            current.datenSammlung.experience = inputexp.value;
        };
        this.field.appendChild(inputexp);

        let inputref = document.createElement("textarea");
        inputref.rows = "4";
        inputref.cols = "64";
        inputref.placeholder = "refrences";
        inputref.value = this.datenSammlung.refrences;
        inputref.onchange = function () {
            current.datenSammlung.refrences = inputref.value;
        };
        this.field.appendChild(inputref);

        let inputprofes = document.createElement("input");
        inputprofes.type = "text";
        inputprofes.placeholder = "profession";
        inputprofes.value = this.datenSammlung.profession;
        inputprofes.onchange = function () {
            current.datenSammlung.profession = inputprofes.value;
        };
        this.field.appendChild(inputprofes);

        let inputprofile = document.createElement("textarea");
        inputprofile.rows = "4";
        inputprofile.cols = "64";
        inputprofile.placeholder = "refrences";
        inputprofes.value = this.datenSammlung.profile;
        inputprofile.onchange = function () {
            current.datenSammlung.profile = inputprofile.value;
        };
        this.field.appendChild(inputprofile);

        //carrer
        for (let i = 0; i < this.datenSammlung.carrer.length; i++) {
            this.field.appendChild(document.createElement("br"));

            let plusbutton = document.createElement("input");
            plusbutton.type = "button";
            plusbutton.value = "+";
            plusbutton.onclick = function () {
                //was macht der button
                current.datenSammlung.carrer.splice(i + 1, 0, {"time": "", "type": "", "location": "", "description": ""})
                current.buildEditor();
            }
            this.field.appendChild(plusbutton);

            let minusbutton = document.createElement("input");
            minusbutton.type = "button";
            minusbutton.value = "-";
            minusbutton.onclick = function () {
                //was macht der button
                current.datenSammlung.carrer.splice(i, 1)
                current.buildEditor();
            }
            if (this.datenSammlung.carrer.length == 1) {
                minusbutton.disabled = true;
            }
            this.field.appendChild(minusbutton);

            let inputcarrerTime = document.createElement("input");
            inputcarrerTime.type = "text";
            inputcarrerTime.placeholder = "Zeit";
            inputcarrerTime.value = this.datenSammlung.carrer[i].time;
            inputcarrerTime.onchange = function () {
                current.datenSammlung.carrer[i].time = inputcarrerTime.value;
            };
            this.field.appendChild(inputcarrerTime);

            let inputcarrerType = document.createElement("input");
            inputcarrerType.type = "text";
            inputcarrerType.placeholder = "Type";
            inputcarrerType.value = this.datenSammlung.carrer[i].type;
            inputcarrerType.onchange = function () {
                current.datenSammlung.carrer[i].type = inputcarrerType.value;
            };
            this.field.appendChild(inputcarrerType);

            let inputcarrerLoc = document.createElement("input");
            inputcarrerLoc.type = "text";
            inputcarrerLoc.placeholder = "location";
            inputcarrerLoc.value = this.datenSammlung.carrer[i].location;
            inputcarrerLoc.onchange = function () {
                current.datenSammlung.carrer[i].location = inputcarrerLoc.value;
            };
            this.field.appendChild(inputcarrerLoc);

            let inputdescription = document.createElement("textarea");
            inputdescription.rows = "4";
            inputdescription.cols = "64";
            inputdescription.placeholder = "descriptuin";
            inputdescription.value = this.datenSammlung.carrer[i].description;
            inputprofile.onchange = function () {
                current.datenSammlung.carrer[i].description = inputdescription.value;
            };
            this.field.appendChild(inputdescription);

            let upbutton = document.createElement("input");
            upbutton.type = "button";
            upbutton.value = "\u25B2";
            upbutton.onclick = function () {
                //was macht der button
                let buff = current.datenSammlung.carrer[i];
                current.datenSammlung.carrer[i] = current.datenSammlung.carrer[i - 1];
                current.datenSammlung.carrer[i - 1] = buff;
                current.buildEditor();
            }
            if (i == 0) {
                upbutton.disabled = true;
            }
            this.field.appendChild(upbutton);

            let downbutton = document.createElement("input");
            downbutton.type = "button";
            downbutton.value = "\u25BC";
            downbutton.onclick = function () {
                //was macht der button
                let buff = current.datenSammlung.carrer[i];
                current.datenSammlung.carrer[i] = current.datenSammlung.carrer[i + 1];
                current.datenSammlung.carrer[i + 1] = buff;
                current.buildEditor();
            }
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
