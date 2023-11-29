export interface ICar {
    id: number
    model: string
    variation: string
    year: number
    acceleration: number
    maxWeight: number
    maxLoad: number
    maxSpeed: number
    fuelConsumption: number
    fuelCapacity: number
    gearboxType: string
    gearboxNumber: number
    engineModel: number
    power: number
    minPowerRpm: number
    maxPowerRpm: number
    powerPerLitre: number
    fuelType: string
    torque: number
    minTorqueRpm: number
    maxTorqueRpm: number
    config: string
    cylinders: number
    bore: number
    stroke: number
    compressionRate: number
    driveWheel: string
    tireWidth: number
    tireProfile: number
    tireRim: number
    wheelWidth: number
    wheelHeight: number
    frontBrakes: string
    rearBrakes: string
    assistBrake: string
    cabinMaterial: string
    cabinSteer: string
    cabinSeats: number
    trunkSpaceMin: number
    trunkSpaceMax: number
}

export const EMPTY_CAR = {
    acceleration: 0,
    assistBrake: "",
    bore: 0,
    cabinMaterial: "",
    cabinSeats: 0,
    cabinSteer: "",
    compressionRate: 0,
    config: "",
    cylinders: 0,
    driveWheel: "",
    engineModel: 0,
    frontBrakes: "",
    fuelCapacity: 0,
    fuelConsumption: 0,
    fuelType: "",
    gearboxNumber: 0,
    gearboxType: "",
    id: 0,
    maxLoad: 0,
    maxPowerRpm: 0,
    maxSpeed: 0,
    maxTorqueRpm: 0,
    maxWeight: 0,
    minPowerRpm: 0,
    minTorqueRpm: 0,
    model: "",
    power: 0,
    powerPerLitre: 0,
    rearBrakes: "",
    stroke: 0,
    tireProfile: 0,
    tireRim: 0,
    tireWidth: 0,
    torque: 0,
    trunkSpaceMax: 0,
    trunkSpaceMin: 0,
    variation: "",
    wheelHeight: 0,
    wheelWidth: 0,
    year: 0
};