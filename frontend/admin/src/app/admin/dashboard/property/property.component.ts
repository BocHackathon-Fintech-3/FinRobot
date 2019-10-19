import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthAdminService } from '../../../shared/services/admin/auth-admin.service'

@Component({
    selector: 'app-admin-property',
    templateUrl: './property.component.html'
  })

  export class AdminPropertyComponent implements OnInit {
    public id = null;
    public details = {
        imagePath: null,
        title: null,
        city: null,
        district: null,
        type: null,
        year: null,
        date: null,
        value: null,
        rent: null,
        description: null
    };
    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            if(this.id === "1") {
                this.details.imagePath = "https://www.remuproperties.com/Cyprus/imgHandler.ashx?ref=28305&order=0&serial=0";
                this.details.title = "One-Bedroom Apartment (No.105) in Finikoudes, Larnaca";
                this.details.city = "Larnaca";
                this.details.district = "Larnaca";
                this.details.type = "Apartment";
                this.details.year = "2011";
                this.details.date = "08/10/2017";
                this.details.value = "292,000";
                this.details.rent = "1,200";
                this.details.description = `
                <p>This asset is a one-bedroom apartment (No.105) on the first floor of “Aphrodite Plaza” in Larnaca.</p>

<p>The asset is adjacent to Filiou Zannetou Street on its south boundary, a few meters west of Finikoudes road (Athinon Avenue) and c. 200m south of Larnaca marina.</p>

<p>The asset has an area of 64sqm and comprises of an open plan living/dining room and kitchen, a bedroom and a bathroom. The asset offers a side sea view. Double glazed windows, central AC/ventilation system, fire protection system and security doors are installed.</p>

<p>Finikoudes is the main touristic area of Larnaca with numerous restaurants, bars, cafes and hotels as well as a blue flag awarded organized beach. The area is very popular with locals and tourists alike.</p>

<p>The asset falls within planning zone Πα2, with building density coefficient of 350%, coverage coefficient of 70%, in 7 floors and a maximum height of 25,3m.</p>
                `;
            }
            if(this.id === "2") {
                this.details.imagePath = "https://www.remuproperties.com/Cyprus/imgHandler.ashx?ref=27345&order=0&serial=0";
                this.details.title = "Two-Bedroom Apartment (No.301) in Kamares, Larnaca";
                this.details.city = "Larnaca";
                this.details.district = "Larnaca";
                this.details.type = "Apartment";
                this.details.year = "2009";
                this.details.date = "23/11/2018";
                this.details.value = "250,000";
                this.details.rent = "1,050";
                this.details.description = `
                <p>This asset is a two-bedroom apartment (No. 301) on the third floor of “Ira Court” in Kamares, Larnaca.</p>

<p>The building is adjacent to Agion Apostolon Street on its southeast boundary, c. 500m south of Kamares, 700m northwest of Larnaca’s salt lake and c. 2,6km east of Kalo Chorio roundabout.</p>

<p>The apartment has an area of c. 152sqm and comprises of a large open living/dining room and kitchen, two bedrooms, a bathroom, a guest toilet, two uncovered verandas and a private roof garden accessible from an internal staircase. The apartment enjoys the exclusive right of use of two covered parking spaces on the ground floor and has double glazed windows and split units installed.</p>

<p>The wider area of the property comprises of residential developments and enjoys good accessibility to the Larnaca city center.</p>

<p>The asset falls within planning zone Kα4, with building density coefficient of 120%, coverage coefficient 50%, in 3 floors and a maximum height of 13,5m.</p>
                `;

            }
            if(this.id === "3") {
                this.details.imagePath = "https://www.remuproperties.com/Cyprus/imgHandler.ashx?ref=28744&order=0&serial=0";
                this.details.title = "Three-Bedroom Apartment (A12) in Acropolis, Nicosia";
                this.details.city = "Nicosia";
                this.details.district = "Acropolis";
                this.details.type = "Apartment";
                this.details.year = "2011";
                this.details.date = "02/05/2016";
                this.details.value = "241,000";
                this.details.rent = "1,100";
                this.details.description = `
                <p>This asset is an incomplete three-bedroom apartment (A12) on the first floor of “Sans Sousi - Block A” in Acropolis, Nicosia. </p>

<p>The building is adjacent to San Souci Street, c. 300m west of Limassol Avenue, c. 250m north of Armenias and Stasinou Avenues junction and c. 200m south of the Central Bank of Cyprus.</p>

<p>The apartment has an area of c. 120sqm and comprises of an open plan living/dining room and a kitchen, three bedrooms (one of which is en-suite) and a bathroom. The apartment enjoys the exclusive right of use of a parking space and storage room in the basement. The apartment has double glazed windows installed. Pending interior works include floor finishes, woodworks, plumbing fixtures and accessories, painting and completion of electro-mechanical installation.</p>

<p>The wider area of the property comprises of residential developments and enjoys good accessibility to the Nicosia city center due to its close proximity to Kennedy Avenue.</p>

<p>The asset falls within planning zone Kα3, with building density coefficient of 140%, coverage coefficient 50%, in 4 floors and a maximum height of 17m.</p>

                `;
            }

        });
    }

    ngOnInit() {
    }
}

