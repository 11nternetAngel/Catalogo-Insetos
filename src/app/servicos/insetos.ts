import { Service } from '@angular/core';

export interface Inseto {
  nome: string;
  nomeCientifico: string;
  curiosidade: string;
  habitat: string;
  alimentacao: string;
  tamanho: string;
  fotos: string[];
}

@Service()
export class Insetos {
  //encodeURIComponent deixa compativel com url
  private foto(arquivo: string): string {
    return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(arquivo) + '?width=800';
  }

  private insetos: Inseto[] = [
    {
      nome: 'Abelha',
      nomeCientifico: 'Apis mellifera',
      curiosidade: 'Dança para avisar as outras onde estão as flores.',
      habitat: 'Colmeias, campos e jardins floridos',
      alimentacao: 'Néctar e pólen',
      tamanho: 'Cerca de 1,5 cm',
      fotos: [
        this.foto('Apis mellifera 2 Luc Viatour.JPG'),
        this.foto('Apis mellifera Western honey bee.jpg'),
        this.foto('Honey bee (Apis mellifera).jpg'),
        this.foto('Western honey bee (lat. Apis mellifera).jpg'),
        this.foto('Bee feeding on flower in ggp.jpg'),
      ],
    },
    {
      nome: 'Borboleta-monarca',
      nomeCientifico: 'Danaus plexippus',
      curiosidade: 'Migra milhares de quilômetros em busca de clima quente.',
      habitat: 'Campos e jardins das Américas',
      alimentacao: 'Néctar de flores (as lagartas comem folhas de Asclepias)',
      tamanho: 'Asas abertas com cerca de 10 cm',
      fotos: [
        this.foto('Monarch Butterfly Danaus plexippus Male 2664px.jpg'),
        this.foto('Danaus plexippus (7).jpg'),
        this.foto('Monarch butterfly in BBG (84685).jpg'),
        this.foto('Monarch Butterfly Danaus plexippus on Milkweed Hybrid 2800px.jpg'),
        this.foto('Monarch butterflies (Danaus plexippus plexippus) Piedra Herrada 2.jpg'),
      ],
    },
    {
      nome: 'Joaninha',
      nomeCientifico: 'Coccinella septempunctata',
      curiosidade: 'Come dezenas de pulgões por dia.',
      habitat: 'Jardins, campos e plantações',
      alimentacao: 'Pulgões e outros insetos pequenos',
      tamanho: 'De 5 a 8 mm',
      fotos: [
        this.foto('Coccinella septempunctata Luc Viatour.JPG'),
        this.foto('Coccinella septempunctata Kaldari.jpg'),
        this.foto('Ladybird May 2008-1.jpg'),
        this.foto('Siebenpunkt-Marienkäfer (Coccinella septempunctata) auf Blüte im FFH-Gebiet "Viernheimer Waldheide und angrenzende Flächen".jpg'),
        this.foto('Coccinella septempunctata couple (aka).jpg'),
      ],
    },
    {
      nome: 'Formiga-cortadeira',
      nomeCientifico: 'Atta cephalotes',
      curiosidade: 'Carrega pedaços de folha bem maiores que ela.',
      habitat: 'Florestas tropicais das Américas',
      alimentacao: 'Fungo que ela cultiva com as folhas',
      tamanho: 'Operárias de vários tamanhos',
      fotos: [
        this.foto('Leaf-cutter ant (Atta cephalotes) Belize.jpg'),
        this.foto('Leaf-cutter ant (Atta cephalotes) Belize 2.jpg'),
        this.foto('Leaf-cutter ant (Atta cephalotes) Belize 4.jpg'),
        this.foto('Atta cephalotes-pjt.jpg'),
        this.foto('Leaf cutter ants arp.jpg'),
      ],
    },
    {
      nome: 'Grilo',
      nomeCientifico: 'Gryllus campestris',
      curiosidade: 'O canto vem do atrito das asas.',
      habitat: 'Campos e gramados, em tocas no chão',
      alimentacao: 'Capim, folhas e pequenos insetos',
      tamanho: 'De 17 a 23 mm',
      fotos: [
        this.foto('Field Cricket. Gryllus campestris, female (45338248741).jpg'),
        this.foto('Świerszcz polny (Gryllus campestris).jpg'),
        this.foto('Gryllus campestris MHNT.jpg'),
        this.foto('Gryllus campestris - nymphe (9687812596).jpg'),
        this.foto('Cricket (15918718296).jpg'),
      ],
    },
  ];

  public getInsetos(): Inseto[] {
    return this.insetos;
  }

  public getSizeInsetos(): number {
    return this.insetos.length;
  }
}
