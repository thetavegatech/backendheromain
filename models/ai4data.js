const mongoose = require('mongoose');

const ai4data = new mongoose.Schema({
    Date_Time: Date,
    AI4CH1_Scale_Min: String,
    AI4CH1_Scale_Max: String,
    AI4CH1_Raw_Min: String,
    AI4CH1_Raw_Max: String,
    AI4CH1_High_High_Set_Value: String,
    AI4CH1_High_Set_Value: String,
    AI4CH1_Low_Set_Value: String,
    AI4CH1_Low_Low_Set_Value: String,
    AI4CH1_Timer_Set_Time: String,
    AI4CH2_Scale_Min: String,
    AI4CH2_Scale_Max: String,
    AI4CH2_Raw_Min: String,
    AI4CH2_Raw_Max: String,
    AI4CH2_High_High_Set_Value: String,
    AI4CH2_High_Set_Value: String,
    AI4CH2_Low_Set_Value: String,
    AI4CH2_Low_Low_Set_Value: String,
    AI4CH2_Timer_Set_Time: String,
    AI4CH3_Scale_Min: String,
    AI4CH3_Scale_Max: String,
    AI4CH3_Raw_Min: String,
    AI4CH3_Raw_Max: String,
    AI4CH3_High_High_Set_Value: String,
    AI4CH3_High_Set_Value: String,
    AI4CH3_Low_Set_Value: String,
    AI4CH3_Low_Low_Set_Value: String,
    AI4CH3_Timer_Set_Time: String,
    AI4CH4_Scale_Min: String,
    AI4CH4_Scale_Max: String,
    AI4CH4_Raw_Min: String,
    AI4CH4_Raw_Max: String,
    AI4CH4_High_High_Set_Value: String,
    AI4CH4_High_Set_Value: String,
    AI4CH4_Low_Set_Value: String,
    AI4CH4_Low_Low_Set_Value: String,
    AI4CH4_Timer_Set_Time: String,
    AI4CH5_Scale_Min: String,
    AI4CH5_Scale_Max: String,
    AI4CH5_Raw_Min: String,
    AI4CH5_Raw_Max: String,
    AI4CH5_High_High_Set_Value: String,
    AI4CH5_High_Set_Value: String,
    AI4CH5_Low_Set_Value: String,
    AI4CH5_Low_Low_Set_Value: String,
    AI4CH5_Timer_Set_Time: String,
    AI4CH6_Scale_Min: String,
    AI4CH6_Scale_Max: String,
    AI4CH6_Raw_Min: String,
    AI4CH6_Raw_Max: String,
    AI4CH6_High_High_Set_Value: String,
    AI4CH6_High_Set_Value: String,
    AI4CH6_Low_Set_Value: String,
    AI4CH6_Low_Low_Set_Value: String,
    AI4CH6_Timer_Set_Time: String,
    AI4CH7_Scale_Min: String,
    AI4CH7_Scale_Max: String,
    AI4CH7_Raw_Min: String,
    AI4CH7_Raw_Max: String,
    AI4CH7_High_High_Set_Value: String,
    AI4CH7_High_Set_Value: String,
    AI4CH7_Low_Set_Value: String,
    AI4CH7_Low_Low_Set_Value: String,
    AI4CH7_Timer_Set_Time: String,
    AI4CH8_Scale_Min: String,
    AI4CH8_Scale_Max: String,
    AI4CH8_Raw_Min: String,
    AI4CH8_Raw_Max: String,
    AI4CH8_High_High_Set_Value: String,
    AI4CH8_High_Set_Value: String,
    AI4CH8_Low_Set_Value: String,
    AI4CH8_Low_Low_Set_Value: String,
    AI4CH8_Timer_Set_Time: String,
});

const AI4data = mongoose.model('ai4data', ai4data);

module.exports = AI4data;