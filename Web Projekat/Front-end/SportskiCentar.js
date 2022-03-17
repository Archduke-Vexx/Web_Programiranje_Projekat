import { Sala } from "./Sala.js";

export class SportskiCentar
{
    constructor(ID, naziv, lokacija)
    {
        this.ID = ID;
        this.naziv = naziv;
        this.lokacija = lokacija;

        this.container = null;
        this.sale = [];
    }

    Crtaj(host)
    {

         this.container = document.createElement("div");
        host.appendChild(this.container);
        this.container.innerHTML = this.naziv;
        this.container.className = "SportskiCentar";
        this.container.onclick = (ev) => this.GetSale();
        
    }

    GetSale()
    {
        
        fetch("https://localhost:5001/Sala/GetSale/" + this.ID).then(p => 
        {
            if(p.ok) 
            {
                
                p.json().then(salejson => salejson.forEach(element => 
                    {
                    let x = new Sala(element.id, element.naziv, element.cena)
                    this.sale.push(x);
                    x.Crtaj(this.container);
                }));

            }
        });
        
    }

}