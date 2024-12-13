//nested objects;
const demon = {
name: "Bai Long",
age: 400,
demonForms: {
    bai: "White Dragon",
    hei : "Black Dragon",
    hong : "Red Dragon"
}
}
document.getElementById('demon').innerHTML = demon.demonForms.hei;
document.getElementById('demo').innerHTML = demon.demonForms.bai;
document.getElementById('demo1').innerHTML = demon.demonForms.hong; 