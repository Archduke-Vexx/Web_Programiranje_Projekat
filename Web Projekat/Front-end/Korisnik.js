export class Korisnik
{
    constructor(id, username, password, ime, prezime, email)
    {
        this.id = id;
        this.username = username;
        this.password = password;
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
    }


    crtaj(host, SavezKont)
    {
        var tr = document.createElement("tr");
        tr.className = "tr";
        host.appendChild(tr);
        
        var el = document.createElement("td");
        var dugme = document.createElement("button");
        dugme.value = "Izmeni";
        dugme.innerText = "Izmeni";

        dugme.onclick = () => 
        {
            SavezKont.querySelector(".inputIme").value = this.ime;
            SavezKont.querySelector(".inputPrezime").value = this.prezime;
            SavezKont.querySelector(".inputEmail").value = this.email;

        };

        el.appendChild(dugme);
        el.className = "td";
        tr.appendChild(el);

        var el = document.createElement("td");
        el.innerHTML = this.ime;
        el.className = "td";
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML = this.prezime;
        el.className = "td";
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML = this.email;
        el.className = "td";
        tr.appendChild(el);
    }

    Upisi(input1, input2, SalaSelect)
    {

        if(input1===null || input1===undefined || input1==="")
        {
            alert("unesite pocetni datum");
            return;
        }
        if(input2===null || input2===undefined || input2==="")
        {
            alert("unesite krajnji datum");
            return;
        }
            
           
            fetch("https://localhost:5001/Zakazivanje/Zakazi/"+input1+"/"+input2+`/${this.id}/${SalaSelect}`, {method:"POST"}).then(ev =>
            {                                                  if(ev.ok) {alert("Ide")}
                                                               else {alert("Overlapuju se datumi. Neuspesno")}}
            );
            console.log({"input1":input1, "input2":input2});    
    }


}
