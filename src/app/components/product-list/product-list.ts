import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  searchTerm = '';
  selectedCategory = '';
  sortBy = 'name';

  products: Product[] = [];
  //filteredProducts: Product[] = [];

  filteredProducts() {
    let result = this.products.filter(p => 
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (!this.selectedCategory || p.category === this.selectedCategory)
    );

    if (this.sortBy === 'priceLowHigh') result.sort((a, b) => a.price - b.price);
    if (this.sortBy === 'priceHighLow') result.sort((a, b) => b.price - a.price);

    return result;
  }

  categories: string[] = ['Machinery', 'Metal', 'Electrical', 'Construction'];

  searchText: string = '';
  //selectedCategory: string = '';
  sortOrder: string = '';

  ngOnInit() {
    this.products = [
      {
        name: '4 Side Seal Multitrack Pouch Packaging Machine',
        description: 'Multitrack pouch packing machine. used for any kind of liquid for about 1 ml to 100ml in single pouch. up to 800 pouches per minute',
        price: 22000,
        image: 'assets/p16.png',
        category: 'Machinery'
      },
      {
        name: 'Center,Four Side Sealing Automatic Multi Track Pouch Packing Machin',
        description: 'We are engaged in offering a wide range of Multi Track Pouch Packing Machine with the above specifications.',
        price: 22000,
        image: 'assets/p17.png',
        category: 'Machinery'
      },
      {
        name: 'Automatic aerosol paint can bucket labeling machine for all round can or bucket',
        description: 'Automatic Aerosol Paint Can Bucket Labeling Machine For All Round Can Or Bucket , Find Complete Details about Automatic Aerosol Paint Can Bucket Labeling Machine For All Round Can Or Bucket,Paint Can .',
        price: 22000,
        image: 'assets/p18.png',
        category: 'Machinery'
      },
      {
        name: 'Automatic Double Side Flat Bottle Sticker Labeling Machine',
        description: 'Automatic Double Side Flat Bottle Sticker Labelling Machine Model LI-BSL 2S is one of the most user friendly. Suitable for applying Front, Back or Side Labels on Flat/Oval/Square/Round shape containers with output Up to 100 Labels per minute depending on products Shape/Size and label size.',
        price: 22000,
        image: 'assets/p19.png',
        category: 'Machinery'
      },
      {
        name: 'Automatic Labeling Machine',
        description: 'Cosmetics, Drinks, Cleaning, Detergent, Skin Care Products, Hair Care Products, Oil, Tea, Vegetable, Fruit, Fish, Meat, Snack, Rice, Flour, Seasoning, Dairy Products',
        price: 22000,
        image: 'assets/p20.png',
        category: 'Machinery'
      },
      {
        name: 'Horizontal Automatic Sealing Machine',
        description: 'Sealing machines are used to seal containers with liquids, granules, powders, and sprays for consumer, bulk, and original equipment manufacturer (OEM) supply shipments. Packaging materials include aerosol containers, bags and pouches, blister packs, bottles and jars, as well as cartons and boxes.',
        price: 0,
        image: 'assets/p1.png',
        category: 'Machinery'
      },      
      {
        name: 'Horizontal Pillow Pack Machine',
        description: "The M-D Servo type horizontal pillow pack is a compact and powerful flow wrapper that is suitable for a variety of applications. The machine user conveyor belt infeed's with a box motion cross sealer to ensure consistent and secure end seal and cutting.",
        price: 22000,
        image: 'assets/p7.png',
        category: 'Machinery'
      },
      {
        name: 'Powder Dosing Packaging Machine',
        description: 'Powder filling machine also known as auger filler and powder dozing machine which is suitable to fill 1gm to 5000gm of any powder in bottles, cans, jars, tubs. Powder filling is automatic filling machine runs of volumetric filling principle. Weighing & filling of powders is optional feature of powder filler.',
        price: 22000,
        image: 'assets/p8.png',
        category: 'Machinery'
      },
      {
        name: 'Oil Packing Machine',
        description: 'Offering you a complete choice of products which include edible oil pouch packing machine, automatic oil pouch packing machine, oil packaging machine, edible oil packaging machine, small edible oil pouch packaging machines and single head edible oil pouch packing machine.',
        price: 22000,
        image: 'assets/p9.png',
        category: 'Machinery'
      },
      {
        name: 'Automatic Oil and Liquid Pouch Filling Machine',
        description: 'The Automatic Liquid Packaging Machine is designed to pack various kinds of liquids as water, juices, vegetable oil, milk, soup, beverage, vinegar, etc. ',
        price: 22000,
        image: 'assets/p10.png',
        category: 'Machinery'
      },
      {
        name: 'Automatic Packing Machine- 4 Head',
        description: 'Packing on the basis of weight. Ideal for all granular, powders and free-flowing material. Ideal for products with variable density. Easy Integration with collar type bagger.',
        price: 22000,
        image: 'assets/p11.png',
        category: 'Machinery'
      },
      {
        name: 'Multihead Weigher With Pouch Packaging Machine, Capacity: standard',
        description: "Vertical Form Fill Seal Machines are used to pack powders & granules such as tea, coffee, _tobacco, spices, rice, pulses, hina powder, milk powder, nuts, dry fruits, wheat flour, besan, Maida, Namkeen's, snack food , biscuits etc.",
        price: 22000,
        image: 'assets/p12.png',
        category: 'Machinery'
      },
      {
        name: 'Collar Type Packing Machine',
        description: "Automatic Vertical Form Fill Seal Machines (Collar type) with volumetric Cup filler is used to pack free flow granules as Tea, Coffee, Spices, Rice, Pulses, Poha, Detergent Powder, Namkeen's etc. up to 10 Kgs",
        price: 22000,
        image: 'assets/p13.png',
        category: 'Machinery'
      },
      {
        name: 'INNOMAC Multihead Weigher Packing Machine',
        description: 'A multihead weigher is a fast, accurate and reliable weighing machine, used in packing both food and non-food products.',
        price: 22000,
        image: 'assets/p14.png',
        category: 'Machinery'
      },
      {
        name: 'Coretamp High Speed Full Automatic Packing Machine with Multihead Weigher',
        description: 'All kinds of grain material, sheet material, strip material and abnormity material which such as candy, melon seeds, chips, peanut, nutlet, preserved fruit, jelly, biscuit, confect, camphorball, currant, almond, chocolate, filbert, corn, Potato Crisps, pet foodstuff, dilatant foodstuff, hardware and plastic can be weighed by the ration.',
        price: 22000,
        image: 'assets/p15.png',
        category: 'Construction'
      },      
      {
        name: 'Auger Base Form Fill And Seal Machine',
        description: 'Auger fillers are machines which fill the right amount of a product into its container. The product is stored in a vessel called the hopper and in each cycle, the filler dispenses a predetermined amount of the product into the package.',
        price: 12000,
        image: 'assets/p2.png',
        category: 'Metal'
      },
      {
        name: 'Automatic FFS Machine For Liquid',
        description: 'The Automatic Liquid Packaging Machine is designed to pack various kinds of liquids as water, juices, vegetable oil, milk, soup, beverage, vinegar, etc. Automatic liquid packing machine is capable of making bags, measuring, filling, sealing, cutting and counting. The whole process operates automatically.',
        price: 85000,
        image: 'assets/p3.jpg',
        category: 'Machinery'
      },
      {
        name: 'Commercial Baking Oven, for Bakery',
        description: 'The Combination oven provides room for your ambitions. It combines the active heat of the convection baking oven with the stationary baking atmosphere of the deck baking oven, thus combining two oven systems in minimum space (which can also be used as a suitable proofing cabinet) for exceptional baking variety and very high sophistication.',
        price: 18000,
        image: 'assets/p4.png',
        category: 'Electrical'
      },
      {
        name: 'Automatic Sealing Machine',
        description: 'Plastic sealing machines also find uses in the packaging industry as they are much more affordable for packing than other materials. Hardware products like nuts and screws can be packed with automatic sealing machines.',
        price: 22000,
        image: 'assets/p5.jpg',
        category: 'Construction'
      },
      {
        name: 'Candy Packing Machine',
        description: 'Packaging machines are used to package products or components. This product area includes equipment that forms, fills, seals, wraps, cleans, and packages at different levels of automation. Packaging machines also include related machinery for sorting, counting, and accumulating. There are many different package types.',
        price: 22000,
        image: 'assets/p6.jpg',
        category: 'Machinery'
      }
    ];
    this.applyFilters();
  }

  // Apply filters and sorting
  applyFilters() {
    let filtered = this.products;

    // Search filter
    if (this.searchText.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // Category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Sort by price
    if (this.sortOrder === 'low-high') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'high-low') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

   // this.filteredProducts = filtered;
  }

  // Watch for any changes in filters
  ngOnChanges() {
    this.applyFilters();
  }

  // Manual triggers for two-way bound filters
  ngDoCheck() {
    this.applyFilters();
  }
}