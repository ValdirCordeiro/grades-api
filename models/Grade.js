import mongoose from "mongoose";

//Esquema da colecao
const gradeSchema = mongoose.Schema({   
    name: {
        type: String,        
    },
    subject: {
        type: String,        
    },
    type: {
        type: String,  
    },
    value: {
        type: Number,        
        validate(value) {
            if (value < 0) throw new Error("Valor negativo não permitido para a nota");
        }
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

//Definindo o modelo da colecao
const gradeModel = mongoose.model('grade', gradeSchema, 'grade');

export { gradeModel };