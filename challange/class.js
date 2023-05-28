import util from "util";

const getProvincies = (countryId, cb) => {
  setTimeout(() => {
    if (countryId !== "id") {
      const error = new Error("Country not found");
      cb(error);
      return;
    }

    cb([
      { id: "id-jk", name: "Jakarta" },
      { id: "id-bt", name: "Banten" },
      { id: "id-jr", name: "Jawa Barat" },
    ]);
  }, 1000);
};

const getProvinciesPromise = util.promisify(getProvincies);

getProvinciesPromise("id")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log("Hendri");
