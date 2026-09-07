const calcularVelocidad = (req, res) => {
    const { distancia, tiempo } = req.body;
 
    if (distancia === undefined || tiempo === undefined) {
        return res.status(400).json({ mensaje: "Faltan datos: se requiere distancia y tiempo" });
    }
    if (typeof distancia !== 'number' || typeof tiempo !== 'number') {
        return res.status(400).json({ mensaje: "Los valores deben ser numéricos" });
    }
    if (distancia < 0 || tiempo < 0) {
        return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
    }
    if (tiempo === 0) {
        return res.status(400).json({ mensaje: "El tiempo no puede ser cero" });
    }
 
    return res.json({
        operacion: "velocidad",
        distancia,
        tiempo,
        resultado: distancia / tiempo,
        unidad: "m/s"
    });
};

const calcularAceleracion = (req, res) => {
    const { velocidad, tiempo } = req.body;
 
    if (velocidad === undefined || tiempo === undefined) {
        return res.status(400).json({ mensaje: "Faltan datos: se requiere velocidad y tiempo" });
    }
    if (typeof velocidad !== 'number' || typeof tiempo !== 'number') {
        return res.status(400).json({ mensaje: "Los valores deben ser numéricos" });
    }
    if (velocidad < 0 || tiempo < 0) {
        return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
    }
    if (tiempo === 0) {
        return res.status(400).json({ mensaje: "El tiempo no puede ser cero" });
    }
 
    return res.json({
        operacion: "aceleracion",
        velocidad,
        tiempo,
        resultado: velocidad / tiempo,
        unidad: "m/s²"
    });
};
 
const calcularFuerza = (req, res) => {
    const { masa, aceleracion } = req.body;
 
    if (masa === undefined || aceleracion === undefined) {
        return res.status(400).json({ mensaje: "Faltan datos: se requiere masa y aceleración" });
    }
    if (typeof masa !== 'number' || typeof aceleracion !== 'number') {
        return res.status(400).json({ mensaje: "Los valores deben ser numéricos" });
    }
    if (masa < 0 || aceleracion < 0) {
        return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
    }
 
    return res.json({
        operacion: "fuerza",
        masa,
        aceleracion,
        resultado: masa * aceleracion,
        unidad: "N"
    });
};
 
const calcularEnergia = (req, res) => {
    const { masa, velocidad } = req.body;
 
    if (masa === undefined || velocidad === undefined) {
        return res.status(400).json({ mensaje: "Faltan datos: se requiere masa y velocidad" });
    }
    if (typeof masa !== 'number' || typeof velocidad !== 'number') {
        return res.status(400).json({ mensaje: "Los valores deben ser numéricos" });
    }
    if (masa < 0 || velocidad < 0) {
        return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
    }
 
    return res.json({
        operacion: "energia",
        masa,
        velocidad,
        resultado: (masa * Math.pow(velocidad, 2)) / 2,
        unidad: "J"
    });
};
 
const calcularDensidad = (req, res) => {
    const { masa, volumen } = req.body;
 
    if (masa === undefined || volumen === undefined) {
        return res.status(400).json({ mensaje: "Faltan datos: se requiere masa y volumen" });
    }
    if (typeof masa !== 'number' || typeof volumen !== 'number') {
        return res.status(400).json({ mensaje: "Los valores deben ser numéricos" });
    }
    if (masa < 0 || volumen < 0) {
        return res.status(400).json({ mensaje: "Los valores no pueden ser negativos" });
    }
    if (volumen === 0) {
        return res.status(400).json({ mensaje: "El volumen no puede ser cero" });
    }
 
    return res.json({
        operacion: "densidad",
        masa,
        volumen,
        resultado: masa / volumen,
        unidad: "kg/m³"
    });
};
 
module.exports = {
    calcularVelocidad,
    calcularAceleracion,
    calcularFuerza,
    calcularEnergia,
    calcularDensidad
};