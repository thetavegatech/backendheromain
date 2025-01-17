const mongoose = require('mongoose');

const ai2data = new mongoose.Schema({
    Date_Time: Date,
    AI2CH1_Scale_Min: String,
    AI2CH1_Scale_Max: String,
    AI2CH1_Raw_Min: String,
    AI2CH1_Raw_Max: String,
    AI2CH1_High_High_Set_Value: String,
    AI2CH1_High_Set_Value: String,
    AI2CH1_Low_Set_Value: String,
    AI2CH1_Low_Low_Set_Value: String,
    AI2CH1_Timer_Set_Time: String,
    AI2CH2_Scale_Min: String,
    AI2CH2_Scale_Max: String,
    AI2CH2_Raw_Min: String,
    AI2CH2_Raw_Max: String,
    AI2CH2_High_High_Set_Value: String,
    AI2CH2_High_Set_Value: String,
    AI2CH2_Low_Set_Value: String,
    AI2CH2_Low_Low_Set_Value: String,
    AI2CH2_Timer_Set_Time: String,
    AI2CH3_Scale_Min: String,
    AI2CH3_Scale_Max: String,
    AI2CH3_Raw_Min: String,
    AI2CH3_Raw_Max: String,
    AI2CH3_High_High_Set_Value: String,
    AI2CH3_High_Set_Value: String,
    AI2CH3_Low_Set_Value: String,
    AI2CH3_Low_Low_Set_Value: String,
    AI2CH3_Timer_Set_Time: String,
    AI2CH4_Scale_Min: String,
    AI2CH4_Scale_Max: String,
    AI2CH4_Raw_Min: String,
    AI2CH4_Raw_Max: String,
    AI2CH4_High_High_Set_Value: String,
    AI2CH4_High_Set_Value: String,
    AI2CH4_Low_Set_Value: String,
    AI2CH4_Low_Low_Set_Value: String,
    AI2CH4_Timer_Set_Time: String,
    AI2CH5_Scale_Min: String,
    AI2CH5_Scale_Max: String,
    AI2CH5_Raw_Min: String,
    AI2CH5_Raw_Max: String,
    AI2CH5_High_High_Set_Value: String,
    AI2CH5_High_Set_Value: String,
    AI2CH5_Low_Set_Value: String,
    AI2CH5_Low_Low_Set_Value: String,
    AI2CH5_Timer_Set_Time: String,
    AI2CH6_Scale_Min: String,
    AI2CH6_Scale_Max: String,
    AI2CH6_Raw_Min: String,
    AI2CH6_Raw_Max: String,
    AI2CH6_High_High_Set_Value: String,
    AI2CH6_High_Set_Value: String,
    AI2CH6_Low_Set_Value: String,
    AI2CH6_Low_Low_Set_Value: String,
    AI2CH6_Timer_Set_Time: String,
    AI2CH7_Scale_Min: String,
    AI2CH7_Scale_Max: String,
    AI2CH7_Raw_Min: String,
    AI2CH7_Raw_Max: String,
    AI2CH7_High_High_Set_Value: String,
    AI2CH7_High_Set_Value: String,
    AI2CH7_Low_Set_Value: String,
    AI2CH7_Low_Low_Set_Value: String,
    AI2CH7_Timer_Set_Time: String,
    AI2CH8_Scale_Min: String,
    AI2CH8_Scale_Max: String,
    AI2CH8_Raw_Min: String,
    AI2CH8_Raw_Max: String,
    AI2CH8_High_High_Set_Value: String,
    AI2CH8_High_Set_Value: String,
    AI2CH8_Low_Set_Value: String,
    AI2CH8_Low_Low_Set_Value: String,
    AI2CH8_Timer_Set_Time: String,
});

const AI2data = mongoose.model('ai2data', ai2data);

module.exports = AI2data;