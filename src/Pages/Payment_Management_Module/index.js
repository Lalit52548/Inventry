import React, { useState } from "react";
import WeeklyPayment from './Weekly_Payment';
import Payment_Form from "./Payment_Form";

const PaymentModule = () => {
    const [formData, setFormData] = useState({
      supervisorName: "",
      siteName: "",
      contractorName: "",
      workDetails: [],
      laborDetails: [],
      otherBills: []
    });
  
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };
  
    const handleFormDataChange = (updatedData) => {
      setFormData(updatedData);
    };
    return (
        <div>
          <WeeklyPayment formData={formData} onOpenPopup={handleOpenPopup} />
          {isPopupOpen && (
            <Payment_Form
              formData={formData}
              onClosePopup={handleClosePopup}
              onFormDataChange={handleFormDataChange}
            />
          )}
        </div>
    );
};

export default PaymentModule;