import { PaginatedResult } from '../models';
import { DriverBonusCredit } from '../../../driver-bonus/driver-bonus-credits/entities/driver-bonus-credit.entity';
import { driverBonusCreditCreatedStub } from '../../../driver-bonus/driver-bonus-credits/tests/stubs/driver-bonus-credits.stub';

describe('PaginatedResult class', () => {
  it('should make an object with correct data', () => {
    const paginatedResult = new PaginatedResult<DriverBonusCredit>([
      [driverBonusCreditCreatedStub()],
      [driverBonusCreditCreatedStub()].length,
    ]);
    expect<PaginatedResult<DriverBonusCredit>>(paginatedResult).toBeTruthy();
    expect(paginatedResult.results).toEqual([driverBonusCreditCreatedStub()]);
  });

  describe('getValues', () => {
    it('should return a result object', () => {
      const expected = {
        results: [driverBonusCreditCreatedStub()],
      };

      const paginatedResult = new PaginatedResult<DriverBonusCredit>([
        [driverBonusCreditCreatedStub()],
        [driverBonusCreditCreatedStub()].length,
      ]);
      expect(paginatedResult).toEqual(expected);
    });
  });
});
