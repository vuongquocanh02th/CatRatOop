class Rat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = 'sống'; // Trạng thái mặc định là sống
    }

    squeak() {
        console.log(`${this.name} kêu: "chít, chít"`);
    }
}
class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    meow() {
        console.log(`${this.name} kêu: "meo meo"`);
    }

    catchRat(rat) {
        if (this.maxSpeed > rat.speed) {
            console.log(`${this.name} bắt được chuột ${rat.name}!`);
            return true; // Trả về true nếu mèo bắt được chuột
        } else {
            console.log(`${this.name} không đủ nhanh để bắt ${rat.name}.`);
            return false; // Trả về false nếu không bắt được
        }
    }

    eatRat(rat) {
        if (rat.status === 'sống') {
            this.weight += rat.weight;
            rat.status = 'chết'; // Đánh dấu chuột đã chết
            console.log(`${this.name} ăn thịt chuột ${rat.name}.`);
            console.log(`${this.name} hiện có khối lượng: ${this.weight}kg.`);
        } else {
            console.log(`${this.name} không thể ăn ${rat.name} vì nó đã chết.`);
        }
    }
}
// Tạo các đối tượng chuột và mèo
const rat1 = new Rat('Chuột 1', 0.2, 5);
const rat2 = new Rat('Chuột 2', 0.3, 6);
const cat1 = new Cat('Mèo 1', 3, 8);

// Mèo kêu
cat1.meow();

// Mèo cố gắng bắt chuột
if (cat1.catchRat(rat1)) {
    // Nếu bắt được chuột, mèo sẽ ăn chuột
    cat1.eatRat(rat1);
}

// Mèo cố gắng bắt chuột thứ hai
if (cat1.catchRat(rat2)) {
    // Nếu bắt được chuột, mèo sẽ ăn chuột
    cat1.eatRat(rat2);
}

// Chuột kêu
rat1.squeak();
rat2.squeak();
