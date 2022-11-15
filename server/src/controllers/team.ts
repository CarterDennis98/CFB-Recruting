import { Team } from '../models/team';

export const getTeam = async (team?: string, year?: string) => {
	try {
		if (team && year) {
			return await Team.findOne({ team: team, year: year });
		} else if (team && !year) {
			return await Team.find({ team: team });
		} else if (!team && year) {
			return await Team.find({ year: year });
		} else {
			return await Team.find({});
		}
	} catch (error) {
		throw error;
	}
}

export const createTeam = async (data: any) => {
	try {
		// Clear collection of teams from matching year
		await Team.deleteMany({ year: data[0].year });
		// Create teams
		return await Team.create(data);
	} catch (error) {
		throw error;
	}
}