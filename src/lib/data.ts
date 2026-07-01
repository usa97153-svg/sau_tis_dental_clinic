export const CLINIC = {
  name: "Sau Tis Dental Clinic",
  city: "Актобе",
  rating: 4.9,
  ratingsCount: 284,
  reviewsCount: 165,
  phone: "+7-777-626-30-10",
  phoneHref: "tel:+77776263010",
  whatsapp: "https://wa.me/77776263010",
  instagram: "https://instagram.com/sautis_aktobe",
  hours: "Ежедневно 09:30–19:00",
};

export const BRANCHES = [
  {
    id: 1,
    title: "Филиал 1",
    address: "Улица Заводская, 40в, 2 этаж",
    city: "Актобе",
    open: "2gis://geo/70000001062807021",
    web: "https://2gis.kz/aktobe/firm/70000001062807021",
  },
  {
    id: 2,
    title: "Филиал 2",
    address: "Улица Аз Наурыз, 41",
    city: "Актобе",
    open: "2gis://geo/70000001062807020",
    web: "https://2gis.kz/aktobe/firm/70000001062807020",
  },
];

export function openBranch1() {
  window.location.href = "2gis://geo/70000001062807021";
  setTimeout(() => window.open("https://2gis.kz/aktobe/firm/70000001062807021", "_blank"), 1500);
}

export function openBranch2() {
  window.location.href = "2gis://geo/70000001062807020";
  setTimeout(() => window.open("https://2gis.kz/aktobe/firm/70000001062807020", "_blank"), 1500);
}
