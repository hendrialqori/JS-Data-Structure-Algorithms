class ParkingLot {
    constructor(sizeSlot) {
        this.sizeLength = sizeSlot - 1;
        this.parkingSlot = Array(sizeSlot).fill('empty')
    };
    currentSlotNumber = 0;

    park(cardId){
        if(this.parkingSlot.length - 1 === this.currentSlotNumber) {
            this.parkingSlot[this.currentSlotNumber] = cardId
            this.currentSlotNumber ++;
            console.log(`Parking Full: ${cardId}`) 
            return;
        }

        this.parkingSlot[this.currentSlotNumber] = cardId
        this.currentSlotNumber ++;
        console.log(`Parking started: ${cardId}`)           
    }

    getSlots(){
        for(let i = 0; i < this.parkingSlot.length; i ++) {
            if(this.parkingSlot[i] === 'empty') {
                console.log(`Slot at ${i + 1} is empty`)
            }else {
              console.log(`Parked at slot ${i + 1}: ${this.parkingSlot[i]}`)
            }
        }
    }

    remove(cardId){
      const findCardId = this.parkingSlot.find(P  => P === cardId)
      if(!findCardId) {
        console.log('Card is not found')
        return;
      }

      for(let i = 0; i < this.parkingSlot.length; i ++) {
        if(this.parkingSlot[i] === cardId) {
          this.parkingSlot[i] = 'empty'
        }
      }

    }
}

const Parking = new ParkingLot(10)
Parking.park('CARD-10')
Parking.park('CARD-20')
Parking.park('CARD-30')
Parking.park('CARD-40')
Parking.park('CARD-50')
console.log('--------')
Parking.remove('CARD-30')
console.log('--------')
Parking.getSlots()