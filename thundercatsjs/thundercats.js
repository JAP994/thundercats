class Thundercats {
    runBehavior;
    attackBehavior;
    setAttackBehavior = (attackBehavior) => {
        this.attackBehavior = attackBehavior;

    }
    setRunBehavior = (runBehavior) => {
        this.runBehavior = runBehavior;

    }
    performRun = () => {
        this.runBehavior.run();
    }
    performAttack = () => {
        this.attackBehavior.attack();
    }


}
//las interfaces van a ser otras clases.

class SwordAttack {
    attack = () => {
        console.log('Ataque con espada...');
    }
}
class GunAttack {
    attack = () => {
        console.log('Ataque con pistola...');
    }
}


//clases Run
class RunFast {
    run = () => {
        console.log('Estoy corriendo a 8000 km/h');
    }
}
class RunSlow {
    run = () => {
        console.log('Estoy corriendo a 10 km/h');
    }
}





// heredan los metodos de Thundercats 
class LeonoThundercat extends Thundercats {


}
class CheetaraThundercat extends Thundercats {


}