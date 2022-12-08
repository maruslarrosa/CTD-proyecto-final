describe("Pruebas", ()=>{
    const text = "Esto es un texto";
const fruits = ['manzana', 'banana', 'frutilla'];

test("Probar que la frase contiene la palaba texto", ()=> {
    expect(text).toMatch(/texto/);
});

// Probamos si existe un elemento
test("Probamos que tenemos una banana", ()=>{
    expect(fruits).toContain('banana');
});

// Probamos si hay un número mayor
test("Mayor que", ()=>{
    expect(10).toBeGreaterThan(9);
});

test("Verdadero", ()=>{
    expect(true).toBeTruthy();
});

// Probamos callbacks
const reverseString = (str, callback) =>{
    callback(str.split("").reverse().join(""))
};

test("Probando un callback", ()=>{
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    }); 
});

// Promesas
const reverseString2 = str =>{
    return new Promise((resolve, reject) =>{
        if(!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test('Probar una promesa', ()=>{
    return reverseString2('Hola').then(
        string => {
            expect(string).toBe('aloH')
        }
    ) 
});

// Async y await

test('Probar async/await', async ()=>{
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});

})


