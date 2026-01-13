import sslcCourses from "@/data/sslcData";

export function getSSLCData() {
  // simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sslcCourses);
    }, 500);
  });
}
