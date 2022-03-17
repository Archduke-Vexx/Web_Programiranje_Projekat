export class Zakazivanje
{
    constructor(ID, korisnikID, sala, sportkicentar, startDate, endDate)
    {
        this.ID = ID;
        this.korisnikID = korisnikID;
        this.sala = sala;
        this.sportkicentar = sportkicentar;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    CrtajZaKorisnika(host)
    {
        var d = document.createElement("div");
        host.appendChild(d);
        d.className = "vasazakazivanja";
        var ime = document.createElement("p");
        ime.innerHTML = this.sala;
        d.appendChild(ime);

        ime = document.createElement("p");
        ime.innerHTML = this.sportkicentar;
        d.appendChild(ime);

        var startDate = document.createElement("input");
        startDate.value = this.startDate;
        startDate.type = "datetime-local";
        d.appendChild(startDate);

        var endDate = document.createElement("input");
        endDate.value = this.endDate;
        endDate.type = "datetime-local";
        d.appendChild(endDate);

        var updateB = document.createElement("button");
        updateB.innerHTML = "update";
        d.appendChild(updateB);

        var deleteB = document.createElement("button");
        deleteB.innerHTML = "delete";
        d.appendChild(deleteB);

        updateB.onclick = (ev) => this.fetchUpdate(startDate.value, endDate.value) 
        deleteB.onclick = (ev) => this.fetchDelete()
    }

    fetchUpdate(startDate, endDate)
    {
    
        if(startDate===null || startDate===undefined || startDate==="")
        {
            alert("unesite pocetni datum");
            return;
        }
        if(endDate===null || endDate===undefined || endDate==="")
        {
            alert("unesite krajnji datum");
            return;
        }
        fetch("https://localhost:5001/Zakazivanje/IzmeniZakazivanje/" + this.korisnikID, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    "id" : this.ID,
                    "StartTime" : startDate,
                    "EndTime" : endDate
                  
                }
            )

        }).then(r => {if(r.ok)alert("Uspeno azuriran")} )
    }

    fetchDelete()
    {
        fetch("https://localhost:5001/Zakazivanje/IzbrisatiZakazivanje/" + this.ID, {
            method:"DELETE"

        })
        .then(r => {if(r.ok)alert("Uspeno izbrisan")} )
    }
}