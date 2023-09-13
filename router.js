const { uploadCompressed, upload, cloudinary } = require("./functions/upload");
const sharp = require("sharp");

module.exports = {
    Router(app) {

        const AdminRouter = (path = "/admin") => {

            const bookingRouter = require("./routes/admin/booking");
            app.use(path + "/booking", bookingRouter);

            const customerRouter = require("./routes/admin/customer");
            app.use(path + "/customer", customerRouter);

            const customerPrescriptionRouter = require("./routes/admin/customerPrescription");
            app.use(path + "/customerPrescription", customerPrescriptionRouter);

            const customerPrescriptionItemRouter = require("./routes/admin/customerPrescriptionItem");
            app.use(path + "/customerPrescriptionItem", customerPrescriptionItemRouter);

            const orderRouter = require("./routes/admin/order");
            app.use(path + "/order", orderRouter);

            const orderPrescriptionRouter = require("./routes/admin/orderPrescription");
            app.use(path + "/orderPrescription", orderPrescriptionRouter);

            const orderReportRouter = require("./routes/admin/orderReport");
            app.use(path + "/orderReport", orderReportRouter);

            const vendorRouter = require("./routes/admin/vendor");
            app.use(path + "/vendor", vendorRouter);

            const vendorWalletHistoryRouter = require("./routes/admin/vendorWalletHistory");
            app.use(path + "/vendorWalletHistory", vendorWalletHistoryRouter);

            const bannerCustomerRouter = require("./routes/admin/bannerCustomer");
            app.use(path + "/bannerCustomer", bannerCustomerRouter);

            const bannerHomeRouter = require("./routes/admin/bannerHome");
            app.use(path + "/bannerHome", bannerHomeRouter);

            const bannerVendorRouter = require("./routes/admin/bannerVendor");
            app.use(path + "/bannerVendor", bannerVendorRouter);

            const bloodGroupRouter = require("./routes/admin/bloodGroup");
            app.use(path + "/bloodGroup", bloodGroupRouter);

            const cancelationReasonRouter = require("./routes/admin/cancelationReason");
            app.use(path + "/cancelationReason", cancelationReasonRouter);

            const faqRouter = require("./routes/admin/faq");
            app.use(path + "/faq", faqRouter);

            const faqTypeRouter = require("./routes/admin/faqType");
            app.use(path + "/faqType", faqTypeRouter);

            const fcmMessageRouter = require("./routes/admin/fcmMessage");
            app.use(path + "/fcmMessage", fcmMessageRouter);

            const importExcelRouter = require("./routes/admin/importExcel");
            app.use(path + "/importExcel", importExcelRouter);

            const labelRouter = require("./routes/admin/label");
            app.use(path + "/label", labelRouter);

            const locationRouter = require("./routes/admin/location");
            app.use(path + "/location", locationRouter);

            const paymentModeRouter = require("./routes/admin/paymentMode");
            app.use(path + "/paymentMode", paymentModeRouter);

            const privacyPolicyRouter = require("./routes/admin/privacyPolicy");
            app.use(path + "/privacyPolicy", privacyPolicyRouter);

            const promoCodeRouter = require("./routes/admin/promoCode");
            app.use(path + "/promoCode", promoCodeRouter);

            const providingServiceRouter = require("./routes/admin/providingService");
            app.use(path + "/providingService", providingServiceRouter);

            const taxRouter = require("./routes/admin/tax");
            app.use(path + "/tax", taxRouter);

            const vendorCommissionRouter = require("./routes/admin/vendorCommission");
            app.use(path + "/vendorCommission", vendorCommissionRouter);

            const vendorDocumentRouter = require("./routes/admin/vendorDocument");
            app.use(path + "/vendorDocument", vendorDocumentRouter);

            const vendorEarningRouter = require("./routes/admin/vendorEarning");
            app.use(path + "/vendorEarning", vendorEarningRouter);

            const vendorWithdrawalRouter = require("./routes/admin/vendorWithdrawal");
            app.use(path + "/vendorWithdrawal", vendorWithdrawalRouter);

            const doctorRouter = require("./routes/admin/doctor");
            app.use(path + "/doctor", doctorRouter);

            const doctorBookingSettingRouter = require("./routes/admin/doctorBookingSetting");
            app.use(path + "/doctorBookingSetting", doctorBookingSettingRouter);

            const doctorCategoryRouter = require("./routes/admin/doctorCategory");
            app.use(path + "/doctorCategory", doctorCategoryRouter);

            const doctorClinicRouter = require("./routes/admin/doctorClinic");
            app.use(path + "/doctorClinic", doctorClinicRouter);

            const doctorDocumentRouter = require("./routes/admin/doctorDocument");
            app.use(path + "/doctorDocument", doctorDocumentRouter);

            const doctorEarningRouter = require("./routes/admin/doctorEarning");
            app.use(path + "/doctorEarning", doctorEarningRouter);

            const doctorRatingRouter = require("./routes/admin/doctorRating");
            app.use(path + "/doctorRating", doctorRatingRouter);

            const doctorServiceRouter = require("./routes/admin/doctorService");
            app.use(path + "/doctorService", doctorServiceRouter);

            const doctorSubCategoryRouter = require("./routes/admin/doctorSubCategory");
            app.use(path + "/doctorSubCategory", doctorSubCategoryRouter);

            const doctorWalletHistoryRouter = require("./routes/admin/doctorWalletHistory");
            app.use(path + "/doctorWalletHistory", doctorWalletHistoryRouter);

            const doctorWithdrawalRouter = require("./routes/admin/doctorWithdrawal");
            app.use(path + "/doctorWithdrawal", doctorWithdrawalRouter);

            const withdrawalOptionRouter = require("./routes/admin/withdrawalOption");
            app.use(path + "/withdrawalOption", withdrawalOptionRouter);

            const deliveryPartnerRouter = require("./routes/admin/deliveryPartner");
            app.use(path + "/deliveryPartner", deliveryPartnerRouter);

            const earningRouter = require("./routes/admin/earning");
            app.use(path + "/earning", earningRouter);

            const customerWalletHistoryRouter = require("./routes/admin/customerWalletHistory");
            app.use(path + "/customerWalletHistory", customerWalletHistoryRouter);

            const productLab = require("./routes/admin/productLab");
            app.use(path + "/productLab", productLab);

            const productPharmacy = require("./routes/admin/productPharmacy");
            app.use(path + "/productPharmacy", productPharmacy);
        }
        const CustomerRouter = (path = "/customer") => {

            const bannerRouter = require("./routes/customer/banner");
            app.use(path + "/banner", bannerRouter);

            const customerRouter = require("./routes/customer/customer");
            app.use(path + "/customer", customerRouter);

            const reportRouter = require("./routes/customer/report");
            app.use(path + "/report", reportRouter);

            const doctorRouter = require("./routes/customer/doctor");
            app.use(path + "/doctor", doctorRouter);

            const doctorCategoryRouter = require("./routes/customer/doctorCategory");
            app.use(path + "/doctorCategory", doctorCategoryRouter);

            const productLab = require("./routes/customer/productLab");
            app.use(path + "/productLab", productLab);

            const productPharmacy = require("./routes/customer/productPharmacy");
            app.use(path + "/productPharmacy", productPharmacy);

            const cartPharmacy = require("./routes/customer/cartPharmacy");
            app.use(path + "/cartPharmacy", cartPharmacy);

            const cartLab = require("./routes/customer/cartLab");
            app.use(path + "/cartLab", cartLab);

            const orderLab = require("./routes/customer/orderLab");
            app.use(path + "/orderLab", orderLab);

            const orderPharmacy = require("./routes/customer/orderPharmacy");
            app.use(path + "/orderPharmacy", orderPharmacy);
        }
        const DoctorRouter = (path = "/doctor") => {

            const appointmentRouter = require("./routes/doctor/appointment");
            app.use(path + "/appointment", appointmentRouter);

            const billingRouter = require("./routes/doctor/billing");
            app.use(path + "/billing", billingRouter);

            const doctorTimeRouter = require("./routes/doctor/doctorTime");
            app.use(path + "/doctorTime", doctorTimeRouter);

            const patientRouter = require("./routes/doctor/patient");
            app.use(path + "/patient", patientRouter);

            const prescriptionSettingRouter = require("./routes/doctor/prescriptionSetting");
            app.use(path + "/prescriptionSetting", prescriptionSettingRouter);

            const testRouter = require("./routes/doctor/test");
            app.use(path + "/test", testRouter);

            const drugRouter = require("./routes/doctor/drug");
            app.use(path + "/drug", drugRouter);

            const drugListRouter = require("./routes/doctor/drugList");
            app.use(path + "/drugList", drugListRouter);

            const prescriptionRouter = require("./routes/doctor/prescription");
            app.use(path + "/prescription", prescriptionRouter);

            const testListRouter = require("./routes/doctor/testList");
            app.use(path + "/testList", testListRouter);

        }
        function FormRouter(path = "/form") {

            const formRouter = require("./routes/forms/allForms");
            app.use(path + "/forms", formRouter);
            const dataRouter = require("./routes/forms/getData");
            app.use(path + "/data", dataRouter);
        }

        function Util(path = "/util") {
            app.post(path + "/upload", upload.single("file"), (req, res) => {
                try {
                    const fileName = req.file.path;
                    return res.json({ status: "success", data: fileName });
                } catch (error) {
                    return res.json({
                        status: "error", message: "No file received"
                    });
                }
            });


            app.post(path + '/uploadImages', uploadCompressed.array('file', 5), async (req, res) => {
                try {
                    const compressedImagesPromises = req.files.map((file) =>
                        sharp(file.buffer)
                            .resize({ width: 1280 })
                            .jpeg({ quality: 70 })
                            .toBuffer()
                    );

                    const compressedImages = await Promise.all(compressedImagesPromises);

                    const uploadPromises = compressedImages.map((compressedImage) =>
                        new Promise((resolve, reject) => {
                            const uploadStream = cloudinary.uploader.upload_stream(
                                { folder: 'uploads' },
                                (error, result) => {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        resolve(result);
                                    }
                                }
                            );

                            uploadStream.end(compressedImage);
                        })
                    );

                    const uploadResults = await Promise.all(uploadPromises);

                    res.status(200).json({
                        message: 'Images uploaded successfully', response: uploadResults.map(one => {
                            return one.url
                        })
                    });

                } catch (error) {
                    console.error('Error processing the images:', error);
                    res.status(500).json({ message: 'Error processing the images' });
                }
            });
        }

        FormRouter();
        AdminRouter();
        CustomerRouter();
        DoctorRouter();
        Util();




    }
}
