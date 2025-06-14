import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  selectedCategory: string | null = null;
  selectedProduct: { name: string; price: string; image: string } | null = null;

  categories = [
    { name: 'Spavaća soba', image: 'spavaca.jpg' },
    { name: 'Kupatilo', image: 'kupatilo.jpg' },
    { name: 'Radna soba', image: 'radna.jpg' },
    { name: 'Dnevna soba', image: 'dnevna.jpg' },
    { name: 'Trpezarija', image: 'trpezarija.jpg' },
    { name: 'Odlaganje', image: 'odlaganje.jpg' },
    { name: 'Zavjese', image: 'zavjese.jpg' },
    { name: 'Bašta', image: 'basta.jpg' },
    { name: 'Kućanstvo', image: 'kucanstvo.jpg' }
  ];

  products: {
    [key: string]: { name: string; price: string; image: string }[];
  } = {
    'Spavaća soba': [
      { name: 'Krevet Classic', price: '300 KM', image: 'bed1.jpg' },
      { name: 'Ormar sa ogledalom', price: '450 KM', image: 'bed2.jpg' },
      { name: 'Noćni ormarić', price: '70 KM', image: 'bed3.jpg' },
      { name: 'Komoda', price: '200 KM', image: 'bed4.jpg' },
      { name: 'Posteljina set', price: '60 KM', image: 'bed5.jpg' },
      { name: 'Lampa za sto', price: '45 KM', image: 'bed6.jpg' },
      { name: 'Tapeta zidna', price: '90 KM', image: 'bed7.jpg' },
      { name: 'Ogledalo', price: '110 KM', image: 'bed8.jpg' },
      { name: 'Polica za knjige', price: '130 KM', image: 'bed9.jpg' }
    ],
    'Dnevna soba': [
      { name: 'Ugaona garnitura', price: '850 KM', image: 'living1.jpg' },
      { name: 'Klub sto', price: '180 KM', image: 'living2.jpg' },
      { name: 'Tepih', price: '120 KM', image: 'living3.jpg' },
      { name: 'TV komoda', price: '260 KM', image: 'living4.jpg' },
      { name: 'Fotelja', price: '340 KM', image: 'living5.jpg' },
      { name: 'Lampa stojeća', price: '95 KM', image: 'living6.jpg' }
    ],
    'Kupatilo': [
      { name: 'Ormarić ispod umivaonika', price: '190 KM', image: 'bath1.jpg' },
      { name: 'Ogledalo sa rasvjetom', price: '170 KM', image: 'bath11.jpg' },
      { name: 'Tuš kabina', price: '520 KM', image: 'bath2.jpg' },
      { name: 'Police za kupatilo', price: '85 KM', image: 'bath3.jpg' },
      { name: 'Set peškira', price: '55 KM', image: 'bath4.jpg' },
      { name: 'Zavjesa za tuš', price: '35 KM', image: 'bath5.jpg' },
      { name: 'WC četka', price: '20 KM', image: 'bath6.jpg' },
      { name: 'Ogledalo', price: '70 KM', image: 'bath7.jpg' },
      { name: 'Podna prostirka', price: '40 KM', image: 'bath8.jpg' },
      { name: 'Kanta za veš', price: '60 KM', image: 'bath9.jpg' }
    ],
    'Trpezarija': [
      { name: 'Trpezarijski sto', price: '350 KM', image: 'dining1.jpg' },
      { name: 'Stolica', price: '90 KM', image: 'dining2.jpg' },
      { name: 'Set tanjira', price: '70 KM', image: 'dining3.jpg' },
      { name: 'Luster', price: '130 KM', image: 'dining4.jpg' },
      { name: 'Ukrasna vaza', price: '50 KM', image: 'dining5.jpg' },
      { name: 'Police za vino', price: '120 KM', image: 'dining6.jpg' },
      { name: 'Stolnjak', price: '35 KM', image: 'dining7.jpg' },
      { name: 'Dekorativne svijeće', price: '25 KM', image: 'dining8.jpg' },
      { name: 'Set čaša', price: '45 KM', image: 'dining9.jpg' },
      { name: 'Ukrasni tanjir', price: '40 KM', image: 'dining10.jpg' }
    ],
    'Radna soba': [
      { name: 'Radni sto', price: '240 KM', image: 'office1.jpg' },
      { name: 'Uredska stolica', price: '180 KM', image: 'office2.jpg' },
      { name: 'Lampa za radni sto', price: '70 KM', image: 'office3.jpg' },
      { name: 'Polica za knjige', price: '150 KM', image: 'office4.jpg' },
      { name: 'Organizator za papire', price: '25 KM', image: 'office5.jpg' },
      { name: 'Uokvirena motivacija', price: '40 KM', image: 'office6.jpg' },
      { name: 'Fotelja za čitanje', price: '210 KM', image: 'office7.jpg' },
      { name: 'Sat', price: '60 KM', image: 'office8.jpg' },
      { name: 'Tabla za planiranje', price: '50 KM', image: 'office9.jpg' },
      { name: 'Kutija za kablove', price: '30 KM', image: 'office10.jpg' }
    ],
    'Odlaganje': [
      { name: 'Kutije za stvari', price: '35 KM', image: 'storage1.jpg' },
      { name: 'Ormar za cipele', price: '220 KM', image: 'storage2.jpg' },
      { name: 'Stalak za kapute', price: '95 KM', image: 'storage3.jpg' },
      { name: 'Korpice za odlaganje', price: '30 KM', image: 'storage4.jpg' },
      { name: 'Komoda', price: '180 KM', image: 'storage5.jpg' },
      { name: 'Plastične kutije', price: '20 KM', image: 'storage6.jpg' },
      { name: 'Metalni stalak', price: '75 KM', image: 'storage7.jpg' },
      { name: 'Ormarić', price: '160 KM', image: 'storage8.jpg' },
      { name: 'Zidne police', price: '70 KM', image: 'storage9.jpg' },
      { name: 'Multifunkcionalna klupa', price: '145 KM', image: 'storage10.jpg' }
    ],
    'Zavjese': [
      { name: 'Zavjesa bijela', price: '60 KM', image: 'curtain1.jpg' },
      { name: 'Zavjesa plava', price: '65 KM', image: 'curtain2.jpg' },
      { name: 'Zavjesa s uzorkom', price: '70 KM', image: 'curtain3.jpg' },
      { name: 'Karnisa', price: '50 KM', image: 'curtain4.jpg' },
      { name: 'Zavjesa crna', price: '80 KM', image: 'curtain5.jpg' },
      { name: 'Prozirna zavjesa', price: '55 KM', image: 'curtain6.jpg' },
      { name: 'Tenda', price: '140 KM', image: 'curtain7.jpg' },
      { name: 'Set zavjesa', price: '120 KM', image: 'curtain8.jpg' },
      { name: 'Panel zavjese', price: '100 KM', image: 'curtain9.jpg' },
      { name: 'Zavjesa tirkizna', price: '75 KM', image: 'curtain10.jpg' }
    ],
    'Bašta': [
      { name: 'Stol za baštu', price: '280 KM', image: 'garden1.jpg' },
      { name: 'Stolice za baštu', price: '220 KM', image: 'garden2.jpg' },
      { name: 'Suncobran', price: '180 KM', image: 'garden3.jpg' },
      { name: 'Roštilj', price: '350 KM', image: 'garden4.jpg' },
      { name: 'Ležaljka', price: '250 KM', image: 'garden5.jpg' },
      { name: 'Baštenski jastuci', price: '80 KM', image: 'garden6.jpg' },
      { name: 'Biljke', price: '45 KM', image: 'garden7.jpg' },
      { name: 'Zidna fontana', price: '160 KM', image: 'garden8.jpg' },
      { name: 'Baštenska dekoracija', price: '70 KM', image: 'garden9.jpg' }
    ],
    'Kućanstvo': [
      { name: 'Pegla', price: '90 KM', image: 'home1.jpg' },
      { name: 'Usisivač', price: '210 KM', image: 'home2.jpg' },
      { name: 'Mop', price: '40 KM', image: 'home3.jpg' },
      { name: 'Sušilica za veš', price: '130 KM', image: 'home4.jpg' },
      { name: 'Kanta za smeće', price: '35 KM', image: 'home5.jpg' },
      { name: 'Kutija za alat', price: '65 KM', image: 'home6.jpg' },
      { name: 'Detergenti', price: '25 KM', image: 'home7.jpg' },
      { name: 'Sprej za staklo', price: '15 KM', image: 'home8.jpg' },
      { name: 'Organizator za frižider', price: '55 KM', image: 'home9.jpg' },
      { name: 'Kutija za nakit', price: '50 KM', image: 'home10.jpg' }
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  clearCategory() {
    this.selectedCategory = null;
    this.selectedProduct = null;
  }

  selectProduct(product: { name: string; price: string; image: string }) {
    this.selectedProduct = product;
  }

  clearProduct() {
    this.selectedProduct = null;
  }
}

