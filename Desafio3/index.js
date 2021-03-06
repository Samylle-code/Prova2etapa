class Animais {
    constructor (genero, classe, ordem, habitat, animal){
        this.genero = genero;
        this.classe = classe;
        this.ordem = ordem;
        this.habitat = habitat;
        this.animal = {
            nome: "",
            genero: genero,
            classe: classe,
            ordem: ordem,
            habitat: habitat
        }
    }

    locomoverSe(classe, movimento){
        
        console.log(`Eu sou um ${classe} que ${movimento}`);     
        
    }
    alimentarSe(classe,tipo){
        console.log(`Eu sou um ${classe} que ${tipo}`);
    }
}

class Mamiferos extends Animais{
    constructor (genero, classe, ordem, habitat){
        super(genero, classe, ordem, habitat); 
        
    }

    locomoverSe(){
        let cetaceo = this.classe;
        cetaceo = false;
    
            if (this.classe == "marinho"){
                cetaceo = true;
                super.locomoverSe("Mamiferos/cetaceo","nada no mar");
            } else {
                super.locomoverSe("Mamiferos", "anda na terra");
            }
    }
    alimentarSe(){
        let carnivora = this.ordem;
        carnivora = false;
        if (tipo == "carnivora"){
            carnivora = true;
            super.locomoverSe("Mamiferos","que come carne");
        } else {
            super.locomoverSe("Mamiferos", "que não come carne");
        }
    }

}
class Peixes extends Animais{
    constructor (genero, classe, ordem, habitat){
        super(genero, classe, ordem, habitat);
        this.classe = classe;
        this.ordem =  ordem;

    }

    locomoverSe(local){
        if (local == "mar"){
            super.locomoverSe("Peixe","nada no mar");
        } else if (local == "rio"|"lagoa"|"riacho"){
            super.locomoverSe("Peixe", "nada em água doce");
        }
    }

    alimentarSe(tipo){
        if (tipo == "carnivora"){
            super.locomoverSe("um Peixe","come carne");
        } else {
            super.locomoverSe("um peixe", "não come carne");
        }
    }
}
class Aves extends Animais{
    constructor (genero, classe, ordem, habitat){
        super(genero, classe, ordem, habitat)
    }
    locomoverSe(migratoria){
        if (migratoria == true){
            super.locomoverSe("Ave","voa no céu/pode imigrar");
        } else {
            super.locomoverSe("Ave", "voa/fica na terra.");
        }
    }

    alimentarSe(tipo){
        if (tipo == "carnivora"){
            super.locomoverSe("ave","come carne");
        } else {
            super.locomoverSe("ave", "não come carne");
        }
    }
}

const formiga = new Mamiferos("feliz", "marinho", "carnivora", "terra");
console.log("Seu genero é", formiga.genero,"Sua classe é",formiga.classe);
formiga.locomoverSe();