export const CreateMeasureList = `
  <div class="card p-5">
      <h5 class="card-title">Create Measure List</h5>
      <div class="card-body">
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">Type : </label>
              <div class="col-sm-10">
                  <select class="form-control">
                      <option>TRANSFORMER</option>
                      <option>SCRUBBER</option>
                      <option>CHILLER</option>
                      <option>COOLING</option>
                      <option>AIR Compressor</option>
                      <option>VACUUM</option>
                      <option>MDB</option>
                      <option>AHU</option>
                      <option>EXHUAST</option>
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">Name : </label>
              <div class="col-sm-10">
              <input type="text"  class="form-control" >
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">Plant : </label>
              <div class="col-sm-10">
                  <select class="form-control">
                      <option>KCET</option>
                      <option>KCE</option>
                  </select>
              </div>
          </div>
          <div class="form-group row mt-5">
              <button class="btn btn-block btn-outline-dark">CREATE</button>
          </div>
      </div>
  </div>`;
