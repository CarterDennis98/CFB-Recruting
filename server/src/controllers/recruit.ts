import { Recruit } from '../models/recruit';

export const getAllRecruits = async () => {
	try {
		return await Recruit.find({});
	} catch (error) {
		throw error;
	}
}