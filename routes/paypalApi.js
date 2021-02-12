var express = require("express");
var router = express.Router();
const axios = require("axios");
const { json } = require("express");
/* PAYPAL */

router.get(
  "/A21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQ",
  function (req, res, next) {
    const qs = require("qs");
    let data = qs.stringify({ grant_type: "client_credentials" });
    let config = {
      method: "post",
      url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      headers: {
        Authorization:
          "Basic QWVrVDRtQlNkbE10X0tzQlhjVks5WmVFbUFvcjhWQzVVYmpDUVZOZXFPbXNlY3BjZHRfRFZQdlNzdFZfcG9wOE51Uk9CcUZIdTNlOGR3dEg6RUpFNUJ4WXh3V29wU1dJRGhEV0syaHFoRWk1SjNZYkdLUjhVVk1jV0JVdWltTHZsc3ZqYXdLV3Y5bXg3U25hTjN5Tk01VmlxeGI3VjZTWUU=",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        res.json(error);
      });
  }
);

router.get(
  "/894983398398393848394839483493fjdundnc9348jf934A21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQ",
  function (req, res, next) {
    axios
      .get(
        "http://localhost:3000/A21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQ"
      )
      .then((response) => {
        return response.data;
      })
      .then((element) => {
        res.json(element);
      });
  }
);

router.post("/sendInvoice", function (req, res, next) {
  let tokenAcceso = "";

  axios
    .get(
      "http://localhost:3000/894983398398393848394839483493fjdundnc9348jf934A21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQ"
    )
    .then((response) => {
      return response.data;
    })
    .then((element) => {
      tokenAcceso = element.access_token;
      let config = {
        method: "get",
        url: `https://api-m.sandbox.paypal.com/v2/checkout/orders/${req.body.id}`,
        headers: {
          Authorization: `Bearer ${element.access_token}`,
          Cookie: "x-cdn=fastly:MAD",
        },
      };

      axios(config).then((response) => {
        let objetoOrden = response.data;

      console.log(JSON.stringify(objetoOrden))

        let data = {
          detail: {
            reference: objetoOrden.purchase_units[0].payments.captures[0].id,
            invoice_date: objetoOrden.create_time.slice(0, 10),
            currency_code: "EUR",
            note: "¡Gracias por su compra!",
            term:
              "Productos perecederos de rápida caducidad, devoluciones admitidas antes de su envío.",
            memo: "Venta online sin DNI",
            payment_term: { term_type: "DUE_ON_RECEIPT" },
          },
          invoicer: {
            name: {
              given_name: "John",
              surname: "Doe",
            },
            address: {
              address_line_1: "Calle caballeros,10",
              postal_code: "13120",
              address_line_2: "Porzuna",
              admin_area_2: "Ciudad Real",
              country_code: "ES",
            },
            email_address: objetoOrden.purchase_units[0].payee.email_address,
            phones: [
              {
                country_code: "034",
                national_number: "9063383902",
                phone_type: "MOBILE",
              },
            ],
            website: "www.horticurita.es",
            logo_url: "https://horticuritagatsby.gtsb.io/horticurita-logo-factura.png",
            additional_notes: "NIF/CIF:20618934E",
          },
          primary_recipients: [
            {
              billing_info: {
                name: {
                  given_name: objetoOrden.payer.name.given_name,
                  surname: objetoOrden.payer.name.surname,
                },
                address: {
                  address_line_1: objetoOrden.payer.address.address_line_1,
                  address_line_2: objetoOrden.payer.address.address_line_2,
                  admin_area_1: objetoOrden.payer.address.admin_area_1,
                  admin_area_2: objetoOrden.payer.address.admin_area_2,
                  postal_code: objetoOrden.payer.address.postal_code,
                  country_code: objetoOrden.payer.address.country_code,
                },
                email_address: objetoOrden.payer.email_address,
                phones: [
                  {
                    country_code: "000",
                    national_number: objetoOrden.payer.phone.phone_number.national_number,
                    phone_type: "MOBILE",
                  },
                ],
                additional_info: "Ventas online sin DNI",
              },
              shipping_info: {
                name: {
                  given_name: "Stephanie",
                  surname: "Meyers",
                },
                address: {
                  address_line_1: "1234 Main Street",
                  admin_area_2: "Anytown",
                  admin_area_1: "CA",
                  postal_code: "98765",
                  country_code: "US",
                },
              },
            },
          ],
        };

        
        let configInvoice = {
          method: "post",
          url: "https://api-m.sandbox.paypal.com/v2/invoicing/invoices",
          headers: {
            Authorization: `Bearer ${tokenAcceso}`,
            "Content-Type": "application/json",
            Cookie: "x-cdn=fastly:MAD",
          },
          data: data,
        };

        axios(configInvoice)
          .then((response) => {
            res.json(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
});

module.exports = router;
