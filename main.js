let coffeitm = JSON.parse(localStorage.getItem("fav")) || [
  {
    name: "Espresso",
    imgUrl: "https://scitechdaily.com/images/perfect-shot-of-espresso.jpg",
    discreption:
      "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water (about 90 °C or 190 °F) is forced under 9–10 bars (900–1,000 kPa; 130–150 psi) of pressure (expressed) through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees",
    favor: false,
  },
  {
    name: "Mocha",
    imgUrl:
      "https://coffee-brewing-methods.com/wp-content/uploads/2015/02/Mocha_coffee-1.jpg",
    discreption:
      "A caffè mocha , also called mocaccino , is a chocolate-flavoured warm beverage that is a variant of a caffè latte , commonly served in a glass rather than a mug. Other commonly used spellings are mochaccino and also mochachino. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffeetrade. ",
    favor: false,
  },
  {
    name: "Latte",
    imgUrl:
      "https://shop-with-discount.com/produkty/kahvikup/images/5d0366af141d0.jpeg",
    discreption:
      'Caffè latte , often shortened to just latte , is a coffee drink of Italian origin made with espresso and steamed milk. The term comes from the Italian caffellatte or caffè latte, from caffè e latte, literally "coffee and milk";',
    favor: false,
  },
  {
    name: "Ice Mocha",
    imgUrl:
      "https://th.bing.com/th/id/R.87bf1e4c1d3beafc0c17e55b5621f4ad?rik=LM6GOKaJdYyEhA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0012%2f0605%2f9079%2farticles%2fSpiced_Iced_Mocha-AmazingGrass-WEB_1024x1024.jpg%3fv%3d1547250426&ehk=lq%2fvSr5aRD5oMhFZmA3394gp4Vg2xzDfOUkITieFOyI%3d&risl=&pid=ImgRaw&r=0",
    discreption:
      "An iced mocha is made combining cooled brewed coffee with equal parts of dairy or dairy-free alternative, topped with chocolate sauce, whipped cream, and a good amount of ice cubes for a refreshing touch. The great part about an iced mocha is the ingredients used",
    favor: false,
  },
  {
    name: "Black Coffee",
    imgUrl:
      "https://th.bing.com/th/id/OIP.d-Jmi9MTceMC7DpMWy3dmQHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    discreption:
      "Black Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee. The seeds are then roasted, a process which transforms them into a consumable product: roasted coffee, which is ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee.",
    favor: false,
  },
];

const render = (xx) => {
  $(".photo").html("");
  xx.forEach((item, i) => {
    $(".photo").append(`<div id='card-${i}' class="image">
      <img
        src="${item.imgUrl}"
        alt=""
      />
      <p><a>${item.name}</a></p>
    
    </div>`);

    $("#card-" + i).click(() => {
      $(".new").addClass("cc");
      $(".page1").hide();
      $(".new").append(`
      <h2>${item.name}</h2>
      <p>${item.discreption}</p>
      <img src= '${item.imgUrl}'>
  <button id='BBT' onclick='BTN(${i})'></button>`);
      if (xx[i].favor == true) {
        $("#BBT").replaceWith(
          `<button id='BBT' onclick='BTN(${i})'>Delete fav</button>`
        );
      } else {
        $("#BBT").replaceWith(
          `<button id='BBT' onclick='BTN(${i})'>Favourite</button>`
        );
      }
    });
  });
};

render(coffeitm);
let fav;
const vv = () => {
  $(".vv").html("");

  fav = coffeitm.filter((item) => item.favor);
  if (fav.length > 0) {
    fav.forEach((item, i) => {
      $(".vv").append(`<div class="image">
      <img
        src="${item.imgUrl}"
        alt=""
      />
      <p><a >${item.name}</a></p>
      <button id='BBT1' onclick='BTN1(${i})'>Remove Fav</button>
    `);
    });
  } else {
    $(".vv")
      .append(`<div class ='noitem'><p>There is no Favourite Added</p></div>
  `);
  }
};

vv();

const BTN = (i) => {
  coffeitm[i].favor = !coffeitm[i].favor;
  if (coffeitm[i].favor == true) {
    $("#BBT").replaceWith(
      `<button id='BBT' onclick='BTN(${i})'>Remove fav</button>`
    );
  } else {
    $("#BBT").replaceWith(
      `<button id='BBT' onclick='BTN(${i})'>Favourite</button>`
    );
  }
  localStorage.setItem("fav", JSON.stringify(coffeitm));
  vv();
};
const BTN1 = (i) => {
  fav[i].favor = false;
  localStorage.setItem("fav", JSON.stringify(coffeitm));
  vv();
};

const search = () => {
  $(".input").on("keyup", () => {
    let input = $(".input").val().toLowerCase();
    var searchfilter = coffeitm.filter((item) => {
      return item.name.toLowerCase().indexOf(input) > -1;
    });
    render(searchfilter);
  });
};
search();
