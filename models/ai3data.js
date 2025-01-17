const mongoose = require('mongoose');

const ai3data = new mongoose.Schema({
    Date_Time: Date,
    AI3CH1_Scale_Min: String,
    AI3CH1_Scale_Max: String,
    AI3CH1_Raw_Min: String,
    AI3CH1_Raw_Max: String,
    AI3CH1_High_High_Set_Value: String,
    AI3CH1_High_Set_Value: String,
    AI3CH1_Low_Set_Value: String,
    AI3CH1_Low_Low_Set_Value: String,
    AI3CH1_Timer_Set_Time: String,
    AI3CH2_Scale_Min: String,
    AI3CH2_Scale_Max: String,
    AI3CH2_Raw_Min: String,
    AI3CH2_Raw_Max: String,
    AI3CH2_High_High_Set_Value: String,
    AI3CH2_High_Set_Value: String,
    AI3CH2_Low_Set_Value: String,
    AI3CH2_Low_Low_Set_Value: String,
    AI3CH2_Timer_Set_Time: String,
    AI3CH3_Scale_Min: String,
    AI3CH3_Scale_Max: String,
    AI3CH3_Raw_Min: String,
    AI3CH3_Raw_Max: String,
    AI3CH3_High_High_Set_Value: String,
    AI3CH3_High_Set_Value: String,
    AI3CH3_Low_Set_Value: String,
    AI3CH3_Low_Low_Set_Value: String,
    AI3CH3_Timer_Set_Time: String,
    AI3CH4_Scale_Min: String,
    AI3CH4_Scale_Max: String,
    AI3CH4_Raw_Min: String,
    AI3CH4_Raw_Max: String,
    AI3CH4_High_High_Set_Value: String,
    AI3CH4_High_Set_Value: String,
    AI3CH4_Low_Set_Value: String,
    AI3CH4_Low_Low_Set_Value: String,
    AI3CH4_Timer_Set_Time: String,
    AI3CH5_Scale_Min: String,
    AI3CH5_Scale_Max: String,
    AI3CH5_Raw_Min: String,
    AI3CH5_Raw_Max: String,
    AI3CH5_High_High_Set_Value: String,
    AI3CH5_High_Set_Value: String,
    AI3CH5_Low_Set_Value: String,
    AI3CH5_Low_Low_Set_Value: String,
    AI3CH5_Timer_Set_Time: String,
    AI3CH6_Scale_Min: String,
    AI3CH6_Scale_Max: String,
    AI3CH6_Raw_Min: String,
    AI3CH6_Raw_Max: String,
    AI3CH6_High_High_Set_Value: String,
    AI3CH6_High_Set_Value: String,
    AI3CH6_Low_Set_Value: String,
    AI3CH6_Low_Low_Set_Value: String,
    AI3CH6_Timer_Set_Time: String,
    AI3CH7_Scale_Min: String,
    AI3CH7_Scale_Max: String,
    AI3CH7_Raw_Min: String,
    AI3CH7_Raw_Max: String,
    AI3CH7_High_High_Set_Value: String,
    AI3CH7_High_Set_Value: String,
    AI3CH7_Low_Set_Value: String,
    AI3CH7_Low_Low_Set_Value: String,
    AI3CH7_Timer_Set_Time: String,
    AI3CH8_Scale_Min: String,
    AI3CH8_Scale_Max: String,
    AI3CH8_Raw_Min: String,
    AI3CH8_Raw_Max: String,
    AI3CH8_High_High_Set_Value: String,
    AI3CH8_High_Set_Value: String,
    AI3CH8_Low_Set_Value: String,
    AI3CH8_Low_Low_Set_Value: String,
    AI3CH8_Timer_Set_Time: String,
});

const AI3data = mongoose.model('ai3data', ai3data);

module.exports = AI3data;