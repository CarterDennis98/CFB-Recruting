import { Team } from '../models/team';

export const getAllTeams = async () => {
	try {
		return await Team.find({});
	} catch (error) {
		throw error;
	}
}

export const getTeam = async (team: string, year: string) => {
	try {
		return await Team.findOne({ team: team, year: year });
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